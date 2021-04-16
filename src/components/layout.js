import React from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import Note from "../components/Note"
import Navbar from "./Navbar"
import Footer from "./Footer"

const shortcodes = { Note }

const Main = styled.main`
  margin: var(--spacing-10) 0 var(--spacing-16) 0;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    // <MDXProvider components={shortcodes}>
      <div data-is-root-path={isRootPath}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </div>
    // </MDXProvider>
  )
}

export default Layout
