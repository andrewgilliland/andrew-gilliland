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
            spare time, I am an organizer of{" "}
            <a href="https://www.pensacoladevs.com/">Pensacola Developers</a>,
            enjoy design, am an{" "}
            <a href="https://www.pensacoladevs.com/">ACSM</a> Certified Personal
            trainer, enjoy woodworking and am a music aficionado.
          </Copy>
        </section>
        <Section>
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
            <li>Express</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
          </ul>
        </Section>
      </Container>
    </Layout>
  )
}

export default AboutPage
