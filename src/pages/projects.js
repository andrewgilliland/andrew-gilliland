import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ComingSoonStyles } from "../components/Layout/Layout"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <ComingSoonStyles>
        <h1>Coming Soon!</h1>
      </ComingSoonStyles>
    </Layout>
  )
}

export default ProjectsPage
