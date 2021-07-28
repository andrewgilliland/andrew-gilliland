import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinksStyles = styled.ul`
  display: none;
  margin-top: 1.5rem;

  a {
    color: var(--grey-050);
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
    <NavLinksStyles>
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
        <Link to="/uses">Uses</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavLinksStyles>
  )
}

export default NavLinks
