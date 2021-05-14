import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import { H1, Copy } from "../components/Typography"
import { Wrapper } from "../components/Layout/Layout"

const ContactPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <Layout title="Contact" location={location}>
      <SEO title="Contact" />

      <Wrapper>
        <H1>Get in Touch</H1>
        <Copy>
          Are looking for a Developer to join your team? Or you are looking for
          someone to help you turn your website idea into reality? Or possibly you
          just want to chat about the weather? Feel free to reach out!
        </Copy>
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}

export default ContactPage
