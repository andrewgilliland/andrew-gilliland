import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaButton from "../components/CtaButton"
import Button from "../components/Button"

const HeroSection = styled.section`
  background: var(--backgroundColor);
  padding-bottom: 3rem;

  h1 {
    color: var(--h1Color);
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

const H4 = styled.h4`
  color: var(--grey-050);
  font-size: 24px;
  font-weight: var(--fontWeight-bold);
  transition: all 0.3s ease;
`

const BlogCard = styled.article`
  cursor: pointer;
  margin-bottom: var(--spacing-12);

  a {
    color: var(--grey-050);
  }

  header {
    margin-bottom: var(--spacing-2);
  }

  h4 {
    margin-bottom: var(--spacing-1);
  }

  small {
    color: var(--grey-500);
    font-size: 14px;
    font-weight: var(--fontWeight-semibold);
    margin: 0;
  }

  p {
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-4);
    max-width: 20em;
  }

  &:hover {
    h4 {
      color: var(--pink-vivid-500);
    }
  }

  @media (min-width: 425px) {
    p {
      max-width: 30em;
    }
  }
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
                key={post.fields.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <header>
                    <H4>
                      <span itemProp="headline">{title}</span>
                    </H4>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <Button>Read More</Button>
                  </section>
                </Link>
              </BlogCard>
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
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
