
export function getInitialColorMode() {
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
