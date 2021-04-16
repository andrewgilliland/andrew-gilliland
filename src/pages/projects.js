import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components/Typography"
import { Container, Grid } from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard"
import ExternalLink from "../components/ExternalLink"

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <Container>
        <H1>Projects</H1>
        <Grid>
          <ProjectCard title="React-Fit">
            React-Fit is a SaaS modeled application. This application is built
            with <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
            , hosted on{" "}
            <ExternalLink href="https://vercel.com/">Vercel</ExternalLink>, has
            authentication and data management with{" "}
            <ExternalLink href="https://firebase.google.com/">
              Firebase
            </ExternalLink>
            , recurring payments and subscription management with{" "}
            <ExternalLink href="https://stripe.com/">Stripe</ExternalLink>, and
            styled with{" "}
            <ExternalLink href="https://tailwindcss.com/">
              TailwindCSS
            </ExternalLink>
            .
          </ProjectCard>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
