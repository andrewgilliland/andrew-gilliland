import React from "react"

import styled from "styled-components"

import Navbar from "./Navbar"
import Footer from "./Footer"

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Main = styled.main`
  margin: var(--spacing-10) 0 var(--spacing-16) 0;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <LayoutStyles data-is-root-path={isRootPath}>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
