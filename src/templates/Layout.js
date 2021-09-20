import React, { useLayoutEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"
import GlobalStyles from "../theme/GlobalStyles"
import Navigation from "../components/organisms/Navigation"
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from "../components/organisms/Footer"
import { Helmet } from "react-helmet"
import Cookies from "../components/organisms/Cookies"

const Layout = ({ children, title, description }) => {
  const [canBeDisplayedCookie, setCanBeDisplayedCookie] = useState(false)
  useLayoutEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-out-quint",
      })
    }, 500)
  }, [])
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Flame Center` : `Flame Center`}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Profesjonalne usługi ppoż. Usługi przeciwpożarowe dla Twojej firmy. Piotrków Trybunalski"
          }
        />
        <meta property="og:image" content="" />
        <html lang="pl" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <main>{children}</main>
        <Cookies
          canBeDisplayed={canBeDisplayedCookie}
          setCanBeDisplayed={setCanBeDisplayedCookie}
        />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
