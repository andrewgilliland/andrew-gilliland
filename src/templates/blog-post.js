import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostStyles = styled.article`
  max-width: var(--container-width);
  max-width: 35em;
  margin: 0 auto;
  padding: var(--spacing-5);

  h1 {
    color: var(--grey-050);
    margin-bottom: var(--spacing-2);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--grey-050);
    margin-bottom: var(--spacing-8);
  }

  p {
    font-size: var(--fontSize-2);
    line-height: var(--lineHeight-relaxed);
    margin-bottom: var(--spacing-10);
  }

  .date {
    font-size: var(--fontSize-1);
    color: var(--grey-500);
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostStyles itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="date">{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </BlogPostStyles>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
