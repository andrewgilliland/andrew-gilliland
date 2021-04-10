import React from "react"
import styled from "styled-components"

const BubbleButtonStyles = styled.button`
  background: var(--background, var(--black));
  border: 1px solid;
  border-color: var(--borderColor, var(--pink-vivid-500));
  border-radius: var(--rounded-full);
  box-shadow: 2px 4px var(--borderColor, var(--pink-vivid-500));
  color: var(--color, var(--grey-050));
  cursor: pointer;
  font-size: var(--fontSize-1);
  font-weight: var(--fontWeight-semibold);
  margin-top: var(--marginTop, var(--spacing-5));
  outline-offset: 8px;
  padding: var(--spacing-3) var(--spacing-6);
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

const BubbleButton = ({
  background,
  borderColor,
  children,
  color,
  marginTop,
}) => {
  return (
    <BubbleButtonStyles
      style={{
        "--background": background,
        "--borderColor": borderColor,
        "--color": color,
        "--marginTop": marginTop,
      }}
    >
      {children}
      <HoverArrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <g fillRule="evenodd">
          <path className="HoverArrow__linePath" d="M0 5h7"></path>
          <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
        </g>
      </HoverArrow>
    </BubbleButtonStyles>
  )
}

export default BubbleButton
