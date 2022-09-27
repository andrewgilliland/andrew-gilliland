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
`

export default RainbowHeading
