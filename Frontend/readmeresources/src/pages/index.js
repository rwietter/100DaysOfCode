import React from "react"
import { ThemeProvider } from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Header from "../components/header/"
import { UseDarkMode } from "../components/useDarkMode/useDarkMode"

import { darkTheme, lightTheme } from "../styles/theme"
import { GlobalStyles } from "../styles/global"

const IndexPage = () => {
  const [theme, toggleTheme, componentMounted] = UseDarkMode()
  // const [theme, setTheme] = useState("light")
  const themeMode = theme === "light" ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SEO title="Home" />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
