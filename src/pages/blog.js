import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"
import { H1 } from "../components/Typography"
import { Container, Grid } from "../components/Layout/Layout"

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
                tags={post.frontmatter.tags}
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
          tags
        }
      }
    }
  }
`
