import styled, { css, keyframes } from "styled-components";
import { ComponentKeys } from "../../components/componentRegistry";

export interface Subheading {
  title: string;
  content: string;
}

export interface ItemWithDetails {
  id: number;
  name: string;
  introduction: string;
  subheadings: Subheading[];
  showButton: boolean;
  buttonLabel: string;
  routingPath: string;
  componentKey?: ComponentKeys | null;
}

// Define the fadeIn keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.h1`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 40px;
  background-color: #f4f4f4;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px; /* Adjust according to the Header height */
  margin-bottom: 40px; /* Adjust according to the Footer height */
  height: calc(100vh - 100px); /* Full height minus header and footer */
  overflow: hidden;
`;

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  width: ${(props) =>
    props.isOpen ? "300px" : "0"}; /* Sidebar hidden when closed */
  padding: ${(props) =>
    props.isOpen ? "20px" : "0"}; /* No padding when closed */
  background-color: #f4f4f4;
  box-shadow: ${(props) =>
    props.isOpen ? "2px 0 5px rgba(0, 0, 0, 0.1)" : "none"};
  overflow-y: ${(props) => (props.isOpen ? "auto" : "hidden")};
  height: calc(100vh - 100px);
  position: fixed;
  top: 60px;
  bottom: 40px;
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  z-index: 10;
  visibility: ${(props) =>
    props.isOpen ? "visible" : "hidden"}; /* Hide when closed */
`;

export const MainContentWrapper = styled.main<{ isOpen: boolean }>`
  margin-left: ${(props) =>
    props.isOpen ? "320px" : "0"}; /* No margin when sidebar is hidden */
  padding: 20px;
  width: calc(
    100% - ${(props) => (props.isOpen ? "320px" : "0")}
  ); /* Full width when sidebar is hidden */
  overflow-y: auto;
  height: 100%;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  flex-direction: row; /* Display children in a row */
  justify-content: space-between; /* Distribute space between cards */
  flex-wrap: wrap; /* Wrap cards to the next line when there is no space */
`;

export const Section = styled.div`
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const SectionContent = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

export const MessageContainer = styled.div<{ visible: boolean }>`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  width: ${({ visible }) => (visible ? "30%" : "0")};
  flex: ${({ visible }) => (visible ? "0 1 auto" : "0")};
  margin-left: ${({ visible }) => (visible ? "20px" : "0")};
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeIn} 0.3s ease-in-out
        `
      : "none"};

  ${({ visible }) =>
    visible &&
    css`
      max-height: 500px; /* Adjust based on content size */
      opacity: 1;
    `}
`;

export const SidebarToggleIcon = styled.div`
  position: fixed;
  top: 15px;
  left: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1001;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #555;
  }
`;

// CardContainer to wrap the individual cards with proper alignment and spacing
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardSection = styled.div`
  flex: 1 1 300px; // Ensure cards take equal width but can shrink if necessary
  max-width: 320px; // Maximum width for each card to maintain consistency
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Ensure content doesn't overflow
  transition: transform 0.3s ease;
  padding: 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;
