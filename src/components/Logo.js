import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Avatar from "./Avatar"

const LogoStyles = styled.div`
  display: flex;
  align-items: center;
`

const H2 = styled.h2`
  font-size: 18px;
  margin-left: 10px;

  background: linear-gradient(
    0deg,
    var(--pink-vivid-500),
    var(--pink-vivid-500)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  color: var(--pink-vivid-500);
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <LogoStyles>
      <Avatar />
      {/* <Link to="/">{author?.name && <H2>{author.name}</H2>}</Link> */}
    </LogoStyles>
  )
}

export default Logo
