import { styled } from "styled-components";

interface NavbarBaseProps {
  label: string;
}

export interface NavbarProps {
  children: React.ReactNode;
}

export interface NavbarButtonProps extends NavbarBaseProps {
  onClick: () => void;
  color?: string;
  hoverColor?: string;
}

export interface NavbarLinkProps extends NavbarBaseProps {
  href: string;
}

export const NavbarContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  display: flex;
  gap: 15px;
  z-index: 1000;
`;

// Create a styled button that uses the props
export const NavbarButton = styled.button<NavbarButtonProps>`
  padding: 8px 16px;
  font-size: 1em;
  color: #fff;
  background-color: ${(props) => props.color || "#007bff"};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

export const NavbarLink = styled.a`
  padding: 8px 16px;
  font-size: 1em;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
