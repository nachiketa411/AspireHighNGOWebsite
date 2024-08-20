import React from "react";
import {
  NavbarButton,
  NavbarButtonProps,
  NavbarContainer,
  NavbarLink,
  NavbarLinkProps,
  NavbarProps,
} from "./styles";

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return <NavbarContainer>{children}</NavbarContainer>;
};

export const NavbarButtonComponent: React.FC<NavbarButtonProps> = ({
  label,
  onClick,
  color,
  hoverColor,
}) => {
  return (
    <NavbarButton
      label={label}
      onClick={onClick}
      color={color}
      hoverColor={hoverColor}
    >
      {label}
    </NavbarButton>
  );
};

export const NavbarLinkComponent: React.FC<NavbarLinkProps> = ({
  label,
  href,
}) => {
  return <NavbarLink href={href}>{label}</NavbarLink>;
};
