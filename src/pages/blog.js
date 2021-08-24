import React, { useState } from "react"
import { graphql } from "gatsby"
import Fuse from "fuse.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"
import { H1 } from "../components/Typography"
import { Container, Grid } from "../components/Layout/Layout"
import { SearchStyles } from "../components/Search"

const BlogPage = ({ data, location }) => {
  const [query, setQuery] = useState()
  const posts = data.allMdx.nodes
  let activePosts = posts

  function handleOnSearch(event) {
    const value = event.currentTarget.value
    setQuery(value)
  }

  const fuse = new Fuse(activePosts, {
    keys: ["frontmatter.title","frontmatter.tags"],
  })

  if (query) {
    const results = fuse.search(query)
    activePosts = results.map(({ item }) => item)
  }

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Container>
        <H1>Latest Articles</H1>

        <SearchStyles>
          <h2>Search</h2>
          <form>
            <input onChange={handleOnSearch} type="search" />
          </form>
        </SearchStyles>

        <Grid>
          {activePosts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <BlogCard
                backgroundColor="var(--grey-1000)"
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
