import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/Layout/Layout"
import { H1, Copy } from "../components/Typography"
import ExternalLink from "../components/ExternalLink"

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <Container>
        <section>
          <H1>Bienvenidos</H1>
          <Copy>
            I'm Andrew, I'm a web developer from Pensacola, Florida. I am
            passionate about constantly learning and using new web technologies.
            I currently work mainly with React on the front end and Node.js on
            the back end, but always enjoy implementing new technologies. In my
            spare time, I help organize{" "}
            <ExternalLink href="https://www.pensacoladevs.com/">
              Pensacola Developers
            </ExternalLink>
            , I am an{" "}
            <ExternalLink href="https://www.acsm.org/">ACSM</ExternalLink>{" "}
            Certified Personal trainer, bartend at the beach, enjoy woodworking
            and a avid music aficionado.
          </Copy>
        </section>
      </Container>
    </Layout>
  )
}

export default AboutPage
