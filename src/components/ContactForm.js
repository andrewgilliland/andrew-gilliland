import React from "react"
import { navigate } from "gatsby-link"
import { useInput } from "../hooks/useInput"
import styled from "styled-components"

import BubbleButton from "../components/BubbleButton"

const ContactFormStyles = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--spacing-5);
  margin-top: var(--spacing-10);

  input {
    background: var(--grey-900);
    border: none;
    border-radius: var(--rounded-md);
    color: var(--grey-050);
    padding: var(--spacing-3);
    grid-column: span 2;

    &:focus {
      box-shadow: 0 0 0 2px var(--purple-vivid-500);
      outline: 0;
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
      box-shadow: 0 0 0 2px var(--purple-vivid-500);
      outline: 0;
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
  const [firstNameProps] = useInput("")
  const [lastNameProps] = useInput("")
  const [emailProps] = useInput("")
  const [companyNameProps] = useInput("")
  const [messageProps] = useInput("")

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
      <BubbleButton type="submit">Submit</BubbleButton>
    </ContactFormStyles>
  )
}

export default ContactForm
