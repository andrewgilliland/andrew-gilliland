import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components/Typography"
import { Container, Grid } from "../components/Layout/Layout"
import ProjectCard from "../components/ProjectCard"
import ExternalLink from "../components/ExternalLink"

const ProjectsPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout title="Projects" location={location}>
      <SEO title="Projects" />
      <Container>
        <H1>Projects</H1>
        <Grid>
          <ProjectCard
            tag="Next.js"
            title="React-Fit"
            link="https://react-fit.vercel.app/"
            repoName="react-fit"
          >
            React-Fit is a SaaS modeled application. This application is built
            with{" "}
            <ExternalLink color="var(--purple-500)" href="https://nextjs.org/">
              Next.js
            </ExternalLink>
            , hosted on{" "}
            <ExternalLink color="var(--purple-500)" href="https://vercel.com/">
              Vercel
            </ExternalLink>
            , has authentication and data management with{" "}
            <ExternalLink
              color="var(--purple-500)"
              href="https://firebase.google.com/"
            >
              Firebase
            </ExternalLink>
            , recurring payments and subscription management with{" "}
            <ExternalLink color="var(--purple-500)" href="https://stripe.com/">
              Stripe
            </ExternalLink>
            , and styled with{" "}
            <ExternalLink
              color="var(--purple-500)"
              href="https://tailwindcss.com/"
            >
              TailwindCSS
            </ExternalLink>
            .
          </ProjectCard>

          <ProjectCard
            tag="Gatsby"
            title="Biff's Brews"
            link="https://biffs-brews.netlify.app/"
            repoName="slicks-slices"
          >
            Slick's Slices is a web application built with{" "}
            <ExternalLink
              color="var(--purple-500)"
              href="https://gatsbyjs.com/"
            >
              Gatsby
            </ExternalLink>
            . The project is hosted on{" "}
            <ExternalLink color="var(--purple-500)" href="https://netlify.com/">
              Netlify
            </ExternalLink>
            . This project uses{" "}
            <ExternalLink color="var(--purple-500)" href="https://sanity.io/">
              Sanity
            </ExternalLink>{" "}
            to manage content. To handle orders, this application utilizes
            Netlify Functions to send email with{" "}
            <ExternalLink
              color="var(--purple-500)"
              href="https://nodemailer.com/"
            >
              Nodemailer
            </ExternalLink>
            . Styles for the application are done with{" "}
            <ExternalLink
              color="var(--purple-500)"
              href="https://styled-components.com/"
            >
              Styled Components
            </ExternalLink>
            .
          </ProjectCard>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
