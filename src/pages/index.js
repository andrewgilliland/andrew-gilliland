import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BubbleButton from "../components/BubbleButton"
import BlogCard from "../components/BlogCard"
import { H2 } from "../components/Typography"
import RainbowHeading from "../components/RainbowHeading"

const HeroSection = styled.section`
  background: var(--backgroundColor);
  padding-bottom: 3rem;
`

const PrimaryHeading = styled.h1`
  color: white;

  span {
    color: transparent;
    background-image: linear-gradient(
      135deg,
      var(--purple-vivid-500),
      var(--pink-vivid-500)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  margin-bottom: var(--spacing-4);
  font-size: 3rem;
  letter-spacing: -0.2px;
`

const Copy = styled.p`
  color: var(--textColor);
  font-size: var(--fontSize-2);
  letter-spacing: 0.2px;

  @media (min-width: 425px) {
    max-width: 25em;
  }
`

const Container = styled.div`
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem;
`

const Section = styled.section`
  background-color: var(--grey-1000);
  border-radius: 5px;
  max-width: var(--container-width);
  margin: -1rem auto 5rem auto;
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <HeroSection className="theme--Night">
        <Container>
          <PrimaryHeading>
            Hello, I'm <br /> <RainbowHeading>Andrew</RainbowHeading>
          </PrimaryHeading>
          <Copy>
            This website is for learning, building, and sharing. Here you will
            find content around web development, JavaScript, CSS, React, and
            various other web development topics.
          </Copy>
          <BubbleButton>
            <Link to="/blog">Jump In</Link>
          </BubbleButton>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <H2>Recently Published</H2>
          {posts.map((post, index) => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <BlogCard
                margin="0 0 var(--spacing-12) 0"
                padding="var(--spacing-8)"
                key={index}
                slug={post.fields.slug}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                excerpt={post.excerpt}
                tags={post.frontmatter.tags}
                title={title}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              />
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
