import React from "react"
import styled from "styled-components"

const CtaButtonStyles = styled.button`
  background-color: ${props => props.color || "var(--pink-vivid-500)"};
  border: none;
  border-radius: 32px;
  color: var(--grey-050);
  font-size: 14px;
  font-weight: var(--fontWeight-semibold);
  margin-top: 1.25rem;
  /* padding: 6px 10px; */
  padding: var(--spacing-3) var(--spacing-6);
  transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    background-color: var(--pink-vivid-700);

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

const CtaButton = ({ children }) => {
  return (
    <CtaButtonStyles>
      {children}
      <HoverArrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <g fillRule="evenodd">
          <path className="HoverArrow__linePath" d="M0 5h7"></path>
          <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
        </g>
      </HoverArrow>
    </CtaButtonStyles>
  )
}

export default CtaButton
