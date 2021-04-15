import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NavLink from "../components/NavLink"
import Dropdown from "../components/Dropdown"
import { ComingSoonStyles } from "../components/Layout/Layout"
import { ThemeProvider } from "../components/ThemeContext"
import DarkToggle from "../components/DarkToggle"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <ComingSoonStyles>
        <h1>Coming Soon!</h1>

        {/* <NavLink href="/blog">
          Topics
          <Dropdown />
        </NavLink> */}

        {/* <ThemeProvider>
          <DarkToggle />
          <p>Words from me</p>
        </ThemeProvider> */}
      </ComingSoonStyles>
    </Layout>
  )
}

export default ProjectsPage
