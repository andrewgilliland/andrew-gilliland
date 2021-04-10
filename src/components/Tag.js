import React from "react"
import styled from "styled-components"

const TagStyles = styled.span`
  color: var(--green-vivid-400);
  background-color: var(--black);
  border-radius: var(--rounded-full);
  border: 1px solid;
  border-color: var(--green-vivid-400);
  box-shadow: 1px 2px var(--green-vivid-400);
  font-size: 14px;
  font-weight: var(--fontWeight-semibold);
  margin-right: 1rem;
  padding: 5px 10px;
`

function Tag({ children }) {
  return <TagStyles>{children}</TagStyles>
}

export default Tag
