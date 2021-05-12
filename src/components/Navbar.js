import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Avatar from "./Avatar"
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
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
      box-shadow: var(--shadow-2xl);
    }
  }

  .nav-close {
    padding: 0.5rem 0.5rem;
    margin-top: var(--spacing-2);
    margin-right: var(--spacing-2);
  }

  .nav-svg {
    height: 2rem;
    width: 2rem;

    path {
      fill: var(--pink-vivid-500);
    }
  }

  .nav-popup {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: var(--spacing-4);
    position: fixed;
    top: 0;
    left: 4%;

    width: 92%;
    background: var(--black);
    border: 1px solid;
    border-color: var(--pink-vivid-500);
    border-radius: var(--rounded-md);
    box-shadow: 2px 4px var(--pink-vivid-500);

    transition: all 0.15s ease-in;
    transform-origin: top right;
  }

  .align-end {
    align-self: flex-end;
  }

  .nav-links {
    font-size: var(--fontSize-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-10);
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

    .nav-links {
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
          <Link to="/">
            <Avatar />
          </Link>

          <NavLinks />
          <button
            className="nav-btn hamburger-menu"
            onClick={toggle}
            onKeyPress={toggleKeyPress}
            type="button"
            aria-label="Open"
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
            className="nav-close nav-btn align-end"
            aria-label="Close"
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
          onKeyPress={toggleKeyPress}
          className={`background ${isOpen ? "visible" : "hidden"}`}
          role="dialog"
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
