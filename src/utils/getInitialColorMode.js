import React, { useState } from "react"

function getInitialColorMode() {
  const persistedColorPrefence = window.localStorage.getItem("color-mode")
  const hasPersistedPreference = typeof persistedColorPrefence === "string"

  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPrefence
  }

  // If they have't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-colo-scheme: dark)")
  const hasMediaQueryPreference = typeof mql.matches === "boolean"

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light"
  }

  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "light"
}


export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode)

  const setColorMode = value => {
    rawSetColorMode(value)

    // Persist it on update
    window.localStorage.setItem("color-mode", value)
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
