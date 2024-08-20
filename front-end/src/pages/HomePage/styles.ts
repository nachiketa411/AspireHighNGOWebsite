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

export const Sidebar = styled.aside`
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: calc(100vh - 100px); /* Full height minus header and footer */
  position: fixed;
  top: 60px; /* Below the header */
  bottom: 40px; /* Above the footer */
`;

export const MainContentWrapper = styled.main`
  margin-left: 320px; /* Adjust according to the sidebar width */
  padding: 20px;
  width: calc(100% - 320px);
  overflow-y: auto;
  height: 100%; /* Full height for scrolling */
  transition: width 0.3s ease;
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
