import React from 'react'
import { MDXProvider } from "@mdx-js/react"

import Note from './src/components/Note'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
import "./src/styles/styles.css"
import "./src/styles/colors.css"
import "./src/styles/scrollbar.css"

// Highlighting for code blocks
require("prismjs/themes/prism-funky.css")

const shortcodes = { Note }

export const wrapRootElement = ({element}) => {
    return (
        <MDXProvider components={shortcodes}>
            {element}
        </MDXProvider>
    )
}