import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "./Logo"
import NavLinks from "./NavLinks"

const NavbarStyles = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MainNav = styled.nav`
  background: transparent;
  box-shadow: var(--shadow-lg);

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

  .nav-btn {
    padding: 0.5rem 0.5rem;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-xl);
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
      box-shadow: var(--shadow-2xl);
    }
  }

  .nav-svg {
    height: 1.5rem;
    width: 1.5rem;

    path {
      fill: var(--pink-vivid-500);
    }
  }

  .nav-popup {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;
    position: fixed;
    top: 0;
    left: 5%;

    height: 50vh;
    width: 90%;
    background-color: var(--grey-900);
    border-radius: 5px;
    /* box-shadow: var(--shadow-lg); */

    transition: all 0.15s ease-in;
    transform-origin: top right;
  }

  .align-end {
    align-self: flex-end;
  }

  .nav-links {
    text-align: center;
    margin-top: 1.5rem;
    padding: 0;
  }

  .flex-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .scale-in {
    transform: scale(1);
    opacity: 1;
    z-index: 10;
  }

  .scale-out {
    transform: scale(0.95);
    opacity: 0;
    z-index: -1;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.15s ease-in;
  }

  .visible {
    opacity: 1;
    z-index: 5;
  }

  .hidden {
    opacity: 0;
    z-index: -1;
  }

  @media (min-width: 426px) {
    .nav-btn {
      display: none;
    }
  }
`

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  function toggle() {
    setOpen(!isOpen)
  }

  function toggleKeyPress() {
    setOpen(!isOpen)
  }

  return (
    <>
      <MainNav>
        <NavbarStyles>
          <Logo />

          <NavLinks />
          <button
            className="nav-btn hamburger-menu"
            onClick={toggle}
            onKeyPress={toggleKeyPress}
            type="button"
          >
            <svg className="nav-svg" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </NavbarStyles>

        <div className={`nav-popup ${isOpen ? "scale-in" : "scale-out"}`}>
          <button
            onClick={toggle}
            onKeyPress={toggleKeyPress}
            type="button"
            className="nav-btn align-end"
          >
            <svg className="nav-svg" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>

          <ul className="nav-links">
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
          </ul>
        </div>
        <div
          onClick={toggle}
          className={`background ${isOpen ? "visible" : "hidden"}`}
        />
      </MainNav>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
