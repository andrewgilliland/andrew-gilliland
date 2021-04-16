import React from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"

import Tag from "./Tag"
import BubbleButton from "./BubbleButton"

const ProjectCardStyles = styled.div`
  border: 2px solid;
  border-color: var(--pink-vivid-500);
  border-radius: var(--rounded-md);
  box-shadow: 2px 2px 0 var(--pink-vivid-500);
  max-width: 100%;

  @media only screen and (min-width: 426px) {
    max-width: 50%;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid;
    border-color: var(--pink-500);
    font-weight: var(--font-semibold);
    padding: var(--spacing-6);
  }

  .card-body {
    padding: var(--spacing-6);
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-6);
  }
`

const GithubStyles = styled.div`
  margin-bottom: -10px;

  a {
    color: var(--grey-500);
  }

  svg {
    margin: 0 var(--spacing-3);
    height: 32px;
    width: 32px;
    transition: all 0.3s ease;
  }

  svg:hover {
    transform: scale(1.1);
    color: var(--grey-300);
  }
`

const ProjectCard = ({ children, title }) => {
  return (
    <ProjectCardStyles>
      <div className="card-head">
        <h3>{title}</h3>
        <Tag marginBottom="0">Next.js</Tag>
      </div>
      <div className="card-body">{children}</div>
      <div className="card-footer">
        <a href="https://react-fit.vercel.app/">
          <BubbleButton marginTop="none">See it Live</BubbleButton>
        </a>
        <GithubStyles>
          <a href="https://github.com/andrewgilliland/react-fit">
            <FaGithub />
          </a>
        </GithubStyles>
      </div>
    </ProjectCardStyles>
  )
}

export default ProjectCard
