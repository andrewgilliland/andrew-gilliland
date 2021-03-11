import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinkStyles = styled.ul`
  display: none;
  margin-top: 1.5rem;

  a {
    color: var(--grey-050);
    font-weight: var(--font-semibold);
    transition: color 0.3s ease-in;

    &:visited {
      color: var(--grey-050);
    }

    &:hover {
      color: var(--pink-vivid-500);
    }
  }

  @media (min-width: 426px) {
    display: flex;

    a {
      margin: 0 0.5rem;
    }
  }
`

const NavLinks = () => {
  return (
    <NavLinkStyles>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavLinkStyles>
  )
}

export default NavLinks
