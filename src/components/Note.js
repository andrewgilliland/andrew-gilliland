import React from "react"
import styled from "styled-components"

const NoteStyles = styled.aside`
  padding: 24px 32px;
  margin-top: 48px;
  border-left: 3px solid;
  border-color: var(--borderColor, var(--yellow-vivid-500));
  background: var(--background, var(--grey-1000));
  border-radius: 3px 6px 6px 3px;
`

function Note({ background, borderColor, children }) {
  return (
    <NoteStyles
      style={{
        "--background": background,
        "--borderColor": borderColor,
      }}
    >
      {children}
    </NoteStyles>
  )
}

export default Note
