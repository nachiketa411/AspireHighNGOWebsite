import styled from "styled-components";

interface ButtonProps {
  color?: string;
  hoverColor?: string;
}

interface OverlayProps {
  overlayColor?: string;
}

interface ContentProps {
  textColor?: string;
}

interface Buttons extends ButtonProps {
  label: string;
  link: string;
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
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Overlay = styled.div<OverlayProps>`
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
  background-color: ${(props) => props.overlayColor || "rgba(0, 0, 0, 0.5)"};
`;

export const Content = styled.div<ContentProps>`
  text-align: center;
  padding: 20px;
  color: ${(props) => props.textColor || "#fff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

export const Button = styled.a<ButtonProps>`
  padding: 10px 20px;
  text-decoration: none;
  background-color: ${(props) => props.color || "#007bff"};
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${(props) => darkenColor(props.color || "#007bff", 0.1)};
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => darkenColor(props.color || "#007bff", 0.2)};
    transform: translateY(-2px);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const darkenColor = (color: string, amount: number): string => {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) - Math.round(255 * amount);
  let g = ((num >> 8) & 0x00ff) - Math.round(255 * amount);
  let b = (num & 0x0000ff) - Math.round(255 * amount);

  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;

  return (
    (usePound ? "#" : "") +
    ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")
  );
};
