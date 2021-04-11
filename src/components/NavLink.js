import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { DropdownStyles } from "./Dropdown"

export const NavLinkStyles = styled.a`
  position: relative;
  color: var(--grey-050);
  /* cursor: pointer; */
  font-weight: var(--fontWeight-semibold);
  transition: color 0.3s ease-in;

  &:visited {
    color: var(--grey-050);
  }

  &:hover {
    color: var(--pink-vivid-500);
  }

  &:hover ${DropdownStyles} {
    opacity: 1;
  }
`

const NavLink = ({ children, href }) => {
  return <NavLinkStyles>{children}</NavLinkStyles>
}

export default NavLink
