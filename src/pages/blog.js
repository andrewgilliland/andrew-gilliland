import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"

const Container = styled.div`
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-5);

  @media (min-width: 769px) {
    padding: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--spacing-8);
`

const H1 = styled.h1`
  color: var(--grey-050);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--spacing-8);
`

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Container>
        <H1>Latest Articles</H1>
        <Grid>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <BlogCard
                backgroundColor="var(--grey-900)"
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
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage

export const blogPageQuery = graphql`
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
