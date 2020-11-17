import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ComingSoonStyles } from "../components/Layout/Layout"

const ThanksPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <ComingSoonStyles>
        <h1>Thanks!</h1>
        <p>Andrew will get back to you as soon as he can!</p>
      </ComingSoonStyles>
    </Layout>
  )
}

export default ThanksPage
