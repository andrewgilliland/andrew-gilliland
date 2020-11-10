import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ComingSoonStyles } from "../components/Layout/Layout"

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <ComingSoonStyles>
        <h1>Coming Soon!</h1>
      </ComingSoonStyles>
    </Layout>
  )
}

export default AboutPage
