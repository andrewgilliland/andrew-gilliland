import React from "react"
import styled from "styled-components"

export const RingGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 40px);
`

const RingStyles = styled.div`
  clip-path: circle(50% at 50% 50%);
  background: linear-gradient(
    to bottom,
    var(--yellow-vivid-300),
    var(--yellow-vivid-700)
  );
  height: 30px;
  width: 30px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 5s linear infinite;
  animation-delay: ${props => props.delay || 0}s;
  perspective: 1000px;

  &:hover {
    animation: none;
  }

  .inner {
    clip-path: circle(50% at 50% 50%);
    background-color: var(--black);
    height: 26px;
    width: 26px;
    z-index: 2;
  }

  @keyframes spin {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`

export default function Ring({ delay }) {
  return (
    <RingStyles delay={delay}>
      <div className="inner"></div>
    </RingStyles>
  )
}
