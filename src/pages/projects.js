import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Grid } from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <Container>
        <Grid>
          <ProjectCard title="React-Fit">
            React-Fit is a SaaS modeled application. This application is built
            with Next.js, hosted on Vercel, has authentication and data
            management with Firebase, and styled with TailwindCSS.
          </ProjectCard>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
