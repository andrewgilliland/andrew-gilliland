import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CenterContentStyles } from "../components/Layout/Layout"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page Not Found" />
      <CenterContentStyles>
        <h1>Page Not Found</h1>
        <p>This isn't the page you're looking for.</p>
      </CenterContentStyles>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
