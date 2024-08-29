import styled from "styled-components";

interface Buttons {
  label: string;
  link: string;
  color?: string;
}

export interface SectionProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  title: string;
  description: string;
  buttons?: Buttons[];
  overlayColor?: string;
  textColor?: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export const Media = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const Description = styled.p`
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; /* Space between buttons */
  margin-top: 20px;
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

    &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
;
`;
