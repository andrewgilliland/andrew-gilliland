import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const AvatarStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: 100%;
    box-shadow: var(--shadow-inset);
  }
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <AvatarStyles>
      {avatar && <Image fixed={avatar} alt={author?.name || ``} />}
    </AvatarStyles>
  )
}

export default Avatar
