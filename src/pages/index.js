import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaButton from "../components/CtaButton"
import BlogCard from "../components/BlogCard"

const HeroSection = styled.section`
  background: var(--backgroundColor);
  padding-bottom: 3rem;

  h1 {
    color: var(--h1Color);
    margin-bottom: var(--spacing-4);
    font-size: 38px;
    letter-spacing: -0.2px;
  }

  p {
    color: var(--textColor);
    font-size: 18px;
    letter-spacing: 0.2px;
    max-width: 20em;
  }

  @media (min-width: 425px) {
    p {
      max-width: 25em;
    }
  }
`

const Container = styled.div`
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem;
  border-left: 1px dashed var(--guideDashedColor);
  border-right: 1px dashed var(--guideDashedColor);
`

const Section = styled.section`
  background-color: var(--grey-1000);
  border-radius: 5px;
  max-width: var(--container-width);
  margin: -1rem auto 5rem auto;
`

const H3 = styled.h3`
  color: var(--purple-vivid-500);
  font-size: 15px;
  font-weight: var(--fontWeight-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-12);
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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
          <h1>Hi, I'm Andrew.</h1>
          <p>
            I build modern websites for growing businesses. Integrating design
            and development to make beautiful and functional websites for your
            business.
          </p>
          <CtaButton>Learn More</CtaButton>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <H3>Recently Published</H3>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <BlogCard
                margin="0 0 var(--spacing-12) 0"
                padding="0"
                key={post.fields.slug}
                slug={post.fields.slug}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                excerpt={post.excerpt}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
