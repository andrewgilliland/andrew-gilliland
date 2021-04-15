import React, { useState, useEffect } from "react"

// This component is meant to avoid state flickers in Gatsby apps
// Wrap this component around a component that relies on data

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  // After component has mounted, hasMounted becomes true
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // The component will at first display "null"
  if (!hasMounted) {
    return null
  }

  return children
}

export default ClientOnly
