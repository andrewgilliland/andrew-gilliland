import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostStyles = styled.article`
  margin: 0 auto;

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
    margin-bottom: var(--spacing-4);
  }

  p {
    font-size: var(--fontSize-2);
    line-height: var(--lineHeight-relaxed);
    margin-bottom: var(--spacing-10);
  }

  a {
    color: var(--pink-vivid-500);
    font-weight: var(--font-semibold);
    transition: box-shadow 400ms ease 0s;

    &:hover {
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0px 2px 0px var(--pink-vivid-500);
    }
  }

  ul {
    list-style: disc inside;
    margin-top: 0;
    padding-left: 0;
  }

  .date {
    font-size: var(--fontSize-1);
    color: var(--grey-500);
  }
`

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, calc(100% - 64px)) // calc function prevents horizontal scroll
    1fr;
  // substitution for padding
  grid-column-gap: 32px;

  & > * {
    grid-column: 2;
  }

  // Does not work if class is used in the markdown
  // TODO: Make component for MDX
  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostStyles itemScope itemType="http://schema.org/Article">
        <ArticleWrapper>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className="date">{post.frontmatter.date}</p>
          </header>
          {/* <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
        </ArticleWrapper>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
