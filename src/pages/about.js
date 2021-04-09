import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/Layout/Layout"
import { H1, Copy } from "../components/Typography"



const AboutSectionStyles = styled.section`
  a {
    color: var(--pink-vivid-500);
    font-weight: var(--fontWeight-semibold);
    transition: box-shadow 400ms ease 0s;
    
    &:hover {
      transition: box-shadow 100ms ease 0s;
      box-shadow: 0px 2px 0px var(--pink-vivid-500);
    }
  }
`

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <Container>
        <AboutSectionStyles>
          <H1>Bienvenidos</H1>
          <Copy>
            I'm Andrew, I'm a web developer from Pensacola, Florida. I am
            passionate about constantly learning and using new web technologies.
            I currently work mainly with React on the front end and Node.js on
            the back end, but always enjoy implementing new technologies. In my
            spare time, I help organize{" "}
            <a href="https://www.pensacoladevs.com/">Pensacola Developers</a>, I
            am an <a href="https://www.acsm.org/">ACSM</a> Certified Personal
            trainer, bartend at the beach, enjoy woodworking and a avid music
            aficionado.
          </Copy>
        </AboutSectionStyles>
      </Container>
    </Layout>
  )
}

export default AboutPage
