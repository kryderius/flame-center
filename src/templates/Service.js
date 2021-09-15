import React from "react"

import Layout from "./Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Headline from "../components/atoms/Headline"

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

const ContentWrapper = styled.section`
  padding: 0 15px;
  margin: 100px 0;
`

const Content = styled.article`
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1140px;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    margin: 30px 0;
  }
`

const ImageContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  height: 400px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    height: 500px;
  }
  @media (min-width: 1400px) {
    max-width: 1140px;
    height: 600px;
  }
`

const PageImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  &.gatsby-image-wrapper {
    position: absolute !important;

    img {
    }
  }
`

const Service = ({ data }) => {
  const service = data.datoCmsService
  return (
    <Layout title={service.pageTitle} description={service.metaDescription}>
      <PageHeader>
        <HeaderImg
          image={data.heroImg.childImageSharp.gatsbyImageData}
          alt=""
        />
        <HeaderTitle>{service.pageTitle}</HeaderTitle>
      </PageHeader>
      <ContentWrapper>
        <ImageContainer>
          <PageImage image={service.image.gatsbyImageData} />
        </ImageContainer>
        <Content dangerouslySetInnerHTML={{ __html: service.pageContent }} />
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ServiceTemplate($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      slug
      pageTitle
      pageContent
      metaDescription
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    heroImg: file(name: { eq: "hero_image" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: WEBP)
      }
    }
  }
`

export default Service
