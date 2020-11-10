import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ComingSoonStyles } from "../components/Layout/Layout"

const ContactPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <ComingSoonStyles>
        <h1>Coming Soon!</h1>
      </ComingSoonStyles>
    </Layout>
  )
}

export default ContactPage
