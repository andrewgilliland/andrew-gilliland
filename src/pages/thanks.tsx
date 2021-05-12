import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { CenterContentStyles } from "../components/Layout/Layout"
import RainbowHeading from "../components/RainbowHeading"

const ThanksPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout title="Thanks" location={location}>
      <SEO title="Thanks" />
      <CenterContentStyles>
        <h1>
          <RainbowHeading>Thanks!</RainbowHeading>
        </h1>
        <p>I will get back to you as soon as I can!</p>
      </CenterContentStyles>
    </Layout>
  )
}

export default ThanksPage
