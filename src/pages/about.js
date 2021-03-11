import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/Layout/Layout"
import { H1, H2, H3, Copy } from "../components/Typography"

const Section = styled.section`
  background-color: var(--grey-1000);
  border-radius: 5px;
  max-width: var(--container-width);
  margin: 5rem auto 5rem auto;
  padding: 2rem;
`

const AboutSectionStyles = styled.section`
  a {
    color: var(--pink-vivid-500);
    border-bottom: 1px solid var(--pink-vivid-500);
    transition: 0.3s opacity ease;

    &:hover {
      opacity: 0.8;
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
        {/* <Section>
          <H2>Technologies I Work With</H2>
          <H3>Languages</H3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Node.js</li>
          </ul>
          <H3>Frameworks/Libraries</H3>
          <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
          </ul>
          <H3>Databases</H3>
          <ul>
            <li>MongoDB</li>
          </ul>
          <H3>Services/API</H3>
          <ul>
            <li>AWS</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Stripe</li>
          </ul>
          <H3>CMS</H3>
          <ul>
            <li>WordPress</li>
            <li>Sanity</li>
            <li>Netlify CMS</li>
          </ul>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default AboutPage
