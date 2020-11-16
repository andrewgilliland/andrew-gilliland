import React from "react"
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
    grid-column: span 4;
    background: var(--grey-900);
    border: none;
    border-radius: var(--rounded-md);
    padding: var(--spacing-3);

    &:focus {
      outline: solid 3px var(--purple-vivid-500);
      -moz-outline-radius: 25px;
    }
  }

  button {
    grid-column: span 2;
  }
`

const ContactForm = () => {
  const [firstNameProps, resetFirstName] = useInput("")
  const [lastNameProps, resetLastName] = useInput("")
  const [emailProps, resetEmail] = useInput("")
  const [companyNameProps, resetCompanyName] = useInput("")
  const [messageProps, resetMessage] = useInput("")

  const submit = e => {
    e.preventDefault()
    resetFirstName("")
    resetLastName("")
    resetEmail("")
    resetCompanyName("")
    resetMessage("")
  }

  return (
    <ContactFormStyles onSubmit={submit}>
      <input
        {...firstNameProps}
        type="text"
        placeholder="First Name"
        required
      />
      <input {...lastNameProps} type="text" placeholder="Last Name" required />
      <input {...emailProps} type="email" placeholder="Email" required />
      <input
        {...companyNameProps}
        type="text"
        placeholder="Company Name"
        required
      />
      <textarea
        {...messageProps}
        placeholder="Your message here..."
        required
      ></textarea>
      <CtaButton>Submit</CtaButton>
    </ContactFormStyles>
  )
}

export default ContactForm
