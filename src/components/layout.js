import React from "react"

import styled from "styled-components"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Main = styled.main`
  margin: var(--spacing-10) 0 var(--spacing-16) 0;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
