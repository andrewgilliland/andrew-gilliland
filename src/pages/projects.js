import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {H1} from '../components/Typography'
import { Container, Grid } from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <Container>
        <H1>Projects</H1>
        <Grid>
          <ProjectCard title="React-Fit">
            React-Fit is a SaaS modeled application. This application is built
            with Next.js, hosted on Vercel, has authentication and data
            management with Firebase, recurring payments and subscription
            management with Stripe, and styled with TailwindCSS.
          </ProjectCard>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
