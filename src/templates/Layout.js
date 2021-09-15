import React, { useLayoutEffect } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"
import GlobalStyles from "../theme/GlobalStyles"
import Navigation from "../components/organisms/Navigation"
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from "../components/organisms/Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children, title, description }) => {
  useLayoutEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-out-quad",
      })
    }, 100)
  }, [])
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Flame Center` : `Flame Center`}</title>
        <meta
          name="description"
          content={description ? description : undefined}
        />
        <meta property="og:image" content="" />
        <html lang="pl" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
