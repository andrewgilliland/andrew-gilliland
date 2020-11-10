import React from "react"
import styled from "styled-components"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const FooterStyles = styled.footer`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 0)),
    linear-gradient(90deg, rgb(255, 0, 136), rgb(0, 153, 255));
  padding: var(--spacing-10);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
`

const Social = styled.div`
  color: var(--grey-500);
  margin-bottom: var(--spacing-5);
  display: flex;
  justify-content: space-between;

  svg {
    margin: 0 var(--spacing-3);
    height: 24px;
    width: 24px;
  }
`

const CopyRight = styled.div`
  color: var(--grey-400);
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <Social>
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
        </Social>
        <CopyRight>© {new Date().getFullYear()} Andrew Gilliland</CopyRight>
      </Container>
    </FooterStyles>
  )
}

export default Footer
