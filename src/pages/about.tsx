import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CenterContentStyles, Wrapper } from "../components/Layout/Layout"
import { H1, Copy } from "../components/Typography"
import ExternalLink from "../components/ExternalLink"
import BubbleButton from "../components/BubbleButton"

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout title="About" location={location}>
      <SEO title="About" />

      <Wrapper>
        <H1>About Me</H1>
        <Copy>
          Hi👋, I'm Andrew. I'm a web developer from Bloomington, Illinois. I am
          passionate about constantly learning and using new web technologies. I
          currently work mainly with React on the front end and Node.js on the
          back end, but always enjoy implementing new technologies. In my spare
          time, I help organize{" "}
          <ExternalLink
            color="var(--purple-500)"
            href="https://www.pensacoladevs.com/"
          >
            Pensacola Developers
          </ExternalLink>
          , I am an{" "}
          <ExternalLink color="var(--purple-500)" href="https://www.acsm.org/">
            ACSM
          </ExternalLink>{" "}
          Certified Personal trainer, enjoy woodworking and a music aficionado.
        </Copy>
        <CenterContentStyles>
          <BubbleButton>
            <a href="https://www.notion.so/anvilofcrom/Resume-e726ff3b64e841de86ce23de5a4ef0af">
              Resume
            </a>
          </BubbleButton>
        </CenterContentStyles>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
