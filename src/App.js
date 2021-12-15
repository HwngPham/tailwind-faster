import React, { useEffect, useState } from "react"

import AnticTemplate from "./pages/AnticTemplate"
import BlogTemplate from "./pages/BlogTemplate"

export default function App() {
  const contents = {
    '/': BlogTemplate,
    '/antic': AnticTemplate,
  }
  const { pathname } = window?.location
  const [PageComponent, setPageComponent] = useState(contents['/'])

  useEffect(() => {
    setPageComponent(contents[pathname])
  }, [pathname])

  return (
    <main>
      {PageComponent}
    </main>
  )
}
