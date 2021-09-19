import React from "react"

import Layout from "../templates/Layout"
import styled from "styled-components"
import Headline from "../components/atoms/Headline"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import PrivacyPolicyContent from "../utils/PrivacyPolicyContent"

const PageHeader = styled.header`
  padding: 100px 15px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
`

const HeaderImg = styled(GatsbyImage)`
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

const HeaderTitle = styled(Headline)`
  color: white;
  text-align: center;
`

const Wrapper = styled.section`
  padding: 0 15px;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const Privacy = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <PageHeader>
        <HeaderImg
          image={data.heroImg.childImageSharp.gatsbyImageData}
          alt=""
        />
        <HeaderTitle data-aos="fade-down" data-aos-delay="200">
          Polityka prywatności
        </HeaderTitle>
      </PageHeader>
      <Wrapper>
        <Container>
          <PrivacyPolicyContent />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    heroImg: file(name: { eq: "hero_image" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: WEBP)
      }
    }
  }
`

export default Privacy
