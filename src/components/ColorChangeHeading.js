import React from "react"
import styled from "styled-components"

const ColorChangeHeadingStyles = styled.h1`
  --animation-time: 10000ms;

  position: relative;
  margin-top: 3rem;
  background-clip: text;
  -webkit-background-clip: text;
  background-color: #8719e0;
  animation: rainbow var(--animation-time) ease infinite;
  color: transparent;
  font-weight: bold;
  font-size: 32px;
  -webkit-text-fill-color: transparent;

  @keyframes rainbow {
    0% {
      background-color: #8719e0;
    }
    17% {
      background-color: #2251cc;
    }
    34% {
      background-color: #0967d2;
    }
    51% {
      background-color: #18981d;
    }
    68% {
      background-color: #0967d2;
    }
    85% {
      background-color: #2251cc;
    }
    100% {
      background-color: #8719e0;
    }
  }
`

export default function ColorChangeHeading({ children }) {
  return <ColorChangeHeadingStyles>{children}</ColorChangeHeadingStyles>
}
