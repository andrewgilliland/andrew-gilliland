import React from "react"
import styled from "styled-components"
import Tag from "./Tag"

export const DropdownStyles = styled.div`
  background: var(--black);
  border: 1px solid;
  border-color: var(--pink-vivid-500);
  border-radius: var(--rounded-md);
  box-shadow: 2px 4px 1px var(--pink-vivid-500);
  padding: var(--spacing-6) var(--spacing-4);
  width: 20rem;

  /* visibility: hidden; */
  position: absolute;
  left: -130px;
  top: 30px;
  opacity: 0;
  transition: opacity 0.5s ease;
`

function Dropdown() {
  return (
    <DropdownStyles>
      <Tag>CSS</Tag>
      <Tag>JavaScript</Tag>
      <Tag>React</Tag>
      <Tag>Gatsby</Tag>
      <Tag>Next.js</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Node.js</Tag>
      <Tag>GraphQL</Tag>
    </DropdownStyles>
  )
}

export default Dropdown
