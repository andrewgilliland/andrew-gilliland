import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"

const AvatarStyles = styled.div`
  .gatsby-image-wrapper {
    border-radius: 100%;
    box-shadow: 2px 2px var(--pink-vivid-500);
  }

  .rainbow {
    background-image: linear-gradient(
      to left,
      violet 14%,
      indigo 14% 28%,
      blue 28% 42%,
      green 42% 56%,
      yellow 56% 70%,
      orange 70% 84%,
      red 84% 100%
    );

    height: 50px;
    width: 50px;
    border-radius: 9999px;
    border: 3px solid white;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Avatar = () => {
  // const data = useStaticQuery(graphql`
  //   query AvatarQuery {
  //     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
  //       childImageSharp {
  //         fixed(width: 50, height: 50, quality: 100) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)

  // const author = data.site.siteMetadata?.author
  // const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <AvatarStyles>
      {/* {avatar && <Image fixed={avatar} alt={author?.name || ``} />} */}
      <div className="rainbow"></div>
    </AvatarStyles>
  )
}

export default Avatar
