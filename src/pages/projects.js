import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NavLink from "../components/NavLink"
import Dropdown from "../components/Dropdown"
import { ComingSoonStyles } from "../components/Layout/Layout"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <ComingSoonStyles>
        <h1>Coming Soon!</h1>

        <NavLink href="/blog">
          Topics
          <Dropdown />
        </NavLink>
      </ComingSoonStyles>
    </Layout>
  )
}

export default ProjectsPage
