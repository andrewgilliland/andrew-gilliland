import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/Layout/Layout"
import { H1, H2, Copy, UL } from "../components/Typography"

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout title="Uses" location={location}>
      <SEO title="Uses" />

      <Wrapper>
        <H1>Uses</H1>
        <Copy>
          This is a list of hardware and software I use in my day to day life as
          a web developer.
        </Copy>
        <div>
          <H2>Hardware</H2>
          <UL>
            <li>Dell Inspiron 7373</li>
            <li>iPhone SE(1st generation)</li>
            <li>Casio F91W-1 Casual Sport Watch</li>
          </UL>
          <H2>Development Tools</H2>
          <UL>
            <li>Visual Studio Code</li>
            <li>Chrome</li>
            <li>Hyper</li>
          </UL>
          <H2>Apps</H2>
          <UL>
            <li>Figma</li>
            <li>Spotify</li>
            <li>Audible</li>
            <li>Notion</li>
          </UL>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
