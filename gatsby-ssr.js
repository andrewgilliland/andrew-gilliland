import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Note from "./src/components/Note"
import { COLORS } from "./src/utils/constants"

const MagicScriptTag = () => {
  let codeToRunOnClient = `
    (function() {
        function getInitialColorMode() {
            const persistedColorPrefence = window.localStorage.getItem("color-mode")
            const hasPersistedPreference = typeof persistedColorPrefence === "string"
            
            if (hasPersistedPreference) {
                return persistedColorPrefence
            }
            
            const mql = window.matchMedia("(prefers-color-scheme: dark)")
            const hasMediaQueryPreference = typeof mql.matches === "boolean"
            
            if (hasMediaQueryPreference) {
                return mql.matches ? "dark" : "light"
            }
            
            return "light"
        }
        
        const colorMode = getInitialColorMode();
        
        const root = document.documentElement;
        
        root.style.setProperty(
            '--color-text',
            colorMode === 'light'
            ? '${COLORS.text.light}'
            : '${COLORS.text.dark}'
        )
        root.style.setProperty(
            '--color-background',
            colorMode === 'light'
            ? '${COLORS.background.light}'
            : '${COLORS.background.dark}'
            )
        root.style.setProperty(
            '--color-primary',
            colorMode === 'light'
            ? '${COLORS.primary.light}'
            : '${COLORS.primary.dark}'
            )
                
        root.style.setProperty('--initial-color-mode', colorMode);
    }) ()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

const shortcodes = { Note }

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
