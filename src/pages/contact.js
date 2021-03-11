import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import { H1 } from "../components/Typography"
import { Container } from "../components/Layout/Layout"

const ContactPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <Container>
        <H1>Get in Touch</H1>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage
