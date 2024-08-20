import styled from "styled-components";

export interface MainContentProps {
  title: string;
  introduction: string;
  subheadings: { title: string; content: string }[];
  showActionButton: boolean; // New prop to control button visibility
  buttonLabel?: string; // New prop for the button label
  buttonAction?: () => void; // New prop for button action
  children?: React.ReactNode; // Accept children as a prop
}

export const ContentWrapper = styled.div`
  padding: 20px;
  animation: fadeIn 0.5s ease-in-out;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const SubSection = styled.div`
  margin-top: 1.5em;
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
`;

export const SubContent = styled.p`
  font-size: 1.2em;
  color: #666;
`;

export const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
