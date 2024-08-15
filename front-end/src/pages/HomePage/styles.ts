import styled, { css, keyframes } from "styled-components";

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
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative; // Ensure the header stays above other elements
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 80px; /* Adjust according to the Header height */
  bottom: 0;
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1; // Ensure the sidebar stays under the header
`;

export const MainContentWrapper = styled.div<{ isMessageVisible: boolean }>`
  margin-left: 320px; /* Adjust according to the sidebar width */
  padding: 20px;
  width: ${({ isMessageVisible }) => (isMessageVisible ? "70%" : "100%")};
  transition: width 0.3s ease;
  overflow-y: auto;
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
