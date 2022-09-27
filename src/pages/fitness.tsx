import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/Layout/Layout"
import { H1 } from "../components/Typography"

const FitnessPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout title="Fitness" location={location}>
      <SEO title="Fitness" />

      <Wrapper>
        <H1>Fitness</H1>
      </Wrapper>
    </Layout>
  )
}

export default FitnessPage
