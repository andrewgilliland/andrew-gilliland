import React from "react"
import { navigate } from "gatsby-link"
import { useInput } from "../hooks/useInput"
import styled from "styled-components"

import CtaButton from "../components/CtaButton"

const ContactFormStyles = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--spacing-5);

  input {
    background: var(--grey-900);
    border: none;
    border-radius: var(--rounded-md);
    color: var(--grey-050);
    padding: var(--spacing-3);
    grid-column: span 2;

    &:focus {
      outline: solid 3px var(--purple-vivid-500);
      -moz-outline-radius: 25px;
    }

    @media (max-width: 425px) {
      grid-column: span 4;
    }
  }

  textarea {
    height: var(--spacing-48);
    background: var(--grey-900);
    border: none;
    border-radius: var(--rounded-md);
    color: var(--grey-050);
    padding: var(--spacing-3);
    grid-column: span 4;

    &:focus {
      outline: solid 3px var(--purple-vivid-500);
      -moz-outline-radius: 25px;
    }
  }

  button {
    grid-column: 2 / span 2;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [firstNameProps, resetFirstName] = useInput("")
  const [lastNameProps, resetLastName] = useInput("")
  const [emailProps, resetEmail] = useInput("")
  const [companyNameProps, resetCompanyName] = useInput("")
  const [messageProps, resetMessage] = useInput("")

  const submit = e => {
    e.preventDefault()
    const form = e.target

    const firstName = firstNameProps.value
    const lastName = lastNameProps.value
    const email = emailProps.value
    const companyName = companyNameProps.value
    const message = messageProps.value

    const data = {
      "form-name": form.getAttribute("name"),
      firstName,
      lastName,
      email,
      companyName,
      message,
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <ContactFormStyles
      onSubmit={submit}
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        {...firstNameProps}
        type="text"
        name="firstName"
        placeholder="First Name"
        required
      />
      <input
        {...lastNameProps}
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
      />
      <input
        {...emailProps}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        {...companyNameProps}
        type="text"
        name="companyName"
        placeholder="Company Name"
        required
      />
      <textarea
        {...messageProps}
        name="message"
        placeholder="Your message here..."
        required
      ></textarea>
      <CtaButton type="submit">Submit</CtaButton>
    </ContactFormStyles>
  )
}

export default ContactForm
