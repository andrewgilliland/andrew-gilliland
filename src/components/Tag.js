import React from "react"
import styled from "styled-components"

const TagStyles = styled.span`
  &.css {
    --color: var(--yellow-vivid-400);
  }

  &.javascript {
    --color: var(--green-vivid-400);
  }
  &.react {
    --color: var(--indigo-vivid-400);
  }
  &.gatsby {
    --color: var(--purple-vivid-400);
  }
  &.nextjs {
    --color: var(--magenta-vivid-400);
  }
  &.typescript {
    --color: var(--blue-vivid-400);
  }
  &.nodejs {
    --color: var(--lime-green-vivid-400);
  }

  &.graphql {
    --color: var(--orange-vivid-400);
  }

  color: var(--color, var(--green-vivid-400));
  background-color: var(--black);
  border-radius: var(--rounded-full);
  border: 1px solid;
  border-color: var(--color, var(--green-vivid-400));
  box-shadow: 1px 2px var(--color, var(--green-vivid-400));
  display: inline-block;
  font-size: 14px;
  font-weight: var(--fontWeight-semibold);
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color, var(--green-vivid-400));
    color: var(--black);
    box-shadow: none;
  }
`

function Tag({ children, color }) {
  return (
    <TagStyles
      className={`${
        children === "CSS"
          ? "css"
          : children === "JavaScript"
          ? "javascript"
          : children === "React"
          ? "react"
          : children === "Gatsby"
          ? "gatsby"
          : children === "Next.js"
          ? "nextjs"
          : children === "TypeScript"
          ? "typescript"
          : children === "Node.js"
          ? "nodejs"
          : children === "GraphQL"
          ? "graphql"
          : ""
      }`}
      style={{ "--color": color }}
    >
      {children}
    </TagStyles>
  )
}

export default Tag
