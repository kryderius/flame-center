import React from "react"
import styled from "styled-components"
import Layout from "../templates/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Headline from "../components/atoms/Headline"
import Text from "../components/atoms/Text"
import Button from "../components/atoms/Button"
import { scroller } from "react-scroll"

import Services from "../components/organisms/Services"
import WhyUs from "../components/organisms/WhyUs"
import CallToAction from "../components/organisms/CallToAction"

const Hero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

const HeroImg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  &.gatsby-image-wrapper {
    position: absolute !important;
  }
  img {
    object-position: 75%;
  }
`

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
    max-width: 720px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  h1 .hero_headline--red {
    color: ${({ theme }) => theme.red};
  }

  h1 .hero_headline--orange {
    color: ${({ theme }) => theme.orange};
  }
`

const StyledHeadline = styled(Headline)`
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingM};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`

const StyledText = styled(Text)`
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyDesktop};
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  const scrollToSection = target => {
    scroller.scrollTo(target, {
      duration: 1500,
      smooth: "easeOutQuad",
      offset: -100,
    })
  }
  return (
    <Layout title="Usługi PPOŻ">
      <Hero id="hero">
        <HeroImg image={data.heroImg.childImageSharp.gatsbyImageData} alt="" />
        <HeroContainer>
          <StyledHeadline $headlineS data-aos="fade-down">
            Zapewniamy wysoką <br /> jakość{" "}
            <span className="hero_headline--red">usług</span> <br />{" "}
            <span className="hero_headline--orange">przeciwpożarowych</span>
          </StyledHeadline>
          <StyledText data-aos="fade-up" data-aos-delay="300">
            Posiadamy ogromne doświadczenie w zakresie ochrony PPOŻ.
          </StyledText>
          <Button onClick={() => scrollToSection("services")}>Sprawdź</Button>
        </HeroContainer>
      </Hero>
      <Services />
      <WhyUs />
      <CallToAction />
    </Layout>
  )
}

const query = graphql`
  {
    heroImg: file(name: { eq: "hero_image" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 80, layout: FULL_WIDTH, formats: WEBP)
      }
    }
  }
`

export default IndexPage
