import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.button`
  background-color: ${props => props.color || "transparent"};
  border: none;
  padding: 0;
  color: var(--pink-vivid-500);
  font-size: var(--fontSize-1);
  font-weight: var(--font-semibold);
  transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    .HoverArrow__tipPath {
      transform: translateX(3px);
    }

    .HoverArrow__linePath {
      opacity: 1;
    }
  }
`

const HoverArrow = styled.svg`
  position: relative;
  top: 0;
  margin-left: 8px;
  stroke-width: 2;
  fill: none;
  stroke: currentColor;

  .HoverArrow__linePath {
    opacity: 0;
    transition: all 150ms ease-in;
  }

  .HoverArrow__tipPath {
    transition: all 150ms ease-in;
  }
`

const Button = ({ children }) => {
  return (
    <ButtonStyles>
      {children}
      <HoverArrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <g fillRule="evenodd">
          <path className="HoverArrow__linePath" d="M0 5h7"></path>
          <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
        </g>
      </HoverArrow>
    </ButtonStyles>
  )
}

export default Button
