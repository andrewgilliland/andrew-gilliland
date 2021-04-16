import React from "react"
import styled from "styled-components"

const ExternalLinkStyles = styled.a`
  color: var(--color, var(--purple-vivid-500));
  font-weight: var(--font-semibold);
  transition: box-shadow 400ms ease 0s;

  &:hover {
    transition: box-shadow 100ms ease 0s;
    box-shadow: 0px 2px 0px var(--color, var(--purple-vivid-500));
  }
`

function ExternalLink({ children, color, href }) {
  return (
    <ExternalLinkStyles style={{ "--color": color }} href={href}>
      {children}
    </ExternalLinkStyles>
  )
}

export default ExternalLink
