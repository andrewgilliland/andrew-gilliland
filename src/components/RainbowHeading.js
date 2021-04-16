import React from "react"
import styled from "styled-components"

import useRainbow from "../hooks/useRainbow"

const RainbowHeading = ({ children, intervalDelay = 1300, ...delegated }) => {
  const transitionDelay = intervalDelay * 1.25

  const colors = useRainbow({ intervalDelay })

  const colorKeys = Object.keys(colors)

  return (
    <RainbowHeadingStyles
      {...delegated}
      style={{
        ...colors,
        // color: `transparent`,
        // backgroundClip: `text`,

        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        backgroundImage: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </RainbowHeadingStyles>
  )
}

const RainbowHeadingStyles = styled.span`
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* position: relative;
  border: none;
  border-radius: var(--rounded-lg);
  color: white;
  font-weight: var(--font-semibold);
  padding: 12px 24px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15); */
`

export default RainbowHeading
