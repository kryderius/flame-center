import React from "react"
import styled from "styled-components"
import Headline from "../atoms/Headline"
import Text from "../atoms/Text"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import CirclesSVG from "../../images/services-circles.svg"

const ServicesSection = styled.section`
  padding: 0 20px;
  margin: 150px 0;
`

const ServicesContainer = styled.div`
  position: relative;
  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  .circles_top_left {
    width: 85px;
    position: absolute;
    top: -5%;
    left: 5%;

    @media (min-width: 1200px) {
      width: 120px;
    }
  }
`

const HeadlineWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 420px;
    margin: 20px 0 60px 0;
  }
`

const StyledHeadline = styled(Headline)`
  color: ${({ theme }) => theme.dark};

  .services_headline--red {
    color: ${({ theme }) => theme.red};
  }
`

const BlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Block = styled(Link)`
  position: relative;
  width: 230px;
  height: 230px;
  border-bottom: 2px solid ${({ theme }) => theme.red};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  margin: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

    .gatsby-image-wrapper {
      opacity: 0.5;
    }
  }

  @media (min-width: 1200px) {
    width: 290px;
    height: 290px;
  }
`

const Title = styled(Text)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.bodyS};
  color: ${({ theme }) => theme.dark};
  text-align: center;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyM};
  }
`

const BlockImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.12;
  transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.gatsby-image-wrapper {
    position: absolute !important;
  }
`

const Services = () => {
  const data = useStaticQuery(blockImg)
  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <img src={CirclesSVG} alt="" className="circles_top_left" />
        <HeadlineWrapper>
          <StyledHeadline as="h2" data-aos="fade-down">
            Ochrona{" "}
            <span className="services_headline--red">przeciwpożarowa</span>
          </StyledHeadline>
          <Text $isDark>
            Sprawdź co możemy dla Ciebie zrobić z zakresu usług BHP i ochrony
            przeciwpożarowej.
          </Text>
        </HeadlineWrapper>
        <BlocksWrapper>
          <Block to="/">
            <BlockImage
              image={data.instrukcjaPpoz.childImageSharp.gatsbyImageData}
            />
            <Title>Instrukcja bezpieczeństwa pożarowego</Title>
          </Block>
          <Block>
            <BlockImage
              image={data.audytPpoz.childImageSharp.gatsbyImageData}
            />
            <Title>Audyt przeciwpożarowy</Title>
          </Block>
          <Block>
            <BlockImage
              image={data.operatPpoz.childImageSharp.gatsbyImageData}
            />
            <Title>Operat przeciwpożarowy</Title>
          </Block>
          <Block>
            <BlockImage image={data.gasnice.childImageSharp.gatsbyImageData} />
            <Title>Gaśnice</Title>
          </Block>
          <Block>
            <BlockImage image={data.hydranty.childImageSharp.gatsbyImageData} />
            <Title>Hydranty</Title>
          </Block>
          <Block>
            <BlockImage
              image={data.szkoleniaPpoz.childImageSharp.gatsbyImageData}
            />
            <Title>Szkolenia przeciwpożarowe</Title>
          </Block>
          <Block>
            <BlockImage
              image={data.szkoleniaPomoc.childImageSharp.gatsbyImageData}
            />
            <Title>Szkolenie z zakresu udzielania pierwszej pomocy </Title>
          </Block>
          <Block>
            <BlockImage
              image={data.planyEwakuacyjne.childImageSharp.gatsbyImageData}
            />
            <Title>Plany ewakuacyjne</Title>
          </Block>
          <Block>
            <BlockImage image={data.nadzor.childImageSharp.gatsbyImageData} />
            <Title>Nadzór przeciwpożarowy nad obiektem</Title>
          </Block>
        </BlocksWrapper>
      </ServicesContainer>
    </ServicesSection>
  )
}

const blockImg = graphql`
  {
    instrukcjaPpoz: file(name: { eq: "instrukcja-ppoz" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    audytPpoz: file(name: { eq: "audyt-ppoz" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    operatPpoz: file(name: { eq: "operat-ppoz" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    gasnice: file(name: { eq: "gasnice" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    hydranty: file(name: { eq: "hydranty" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    szkoleniaPpoz: file(name: { eq: "szkolenia-ppoz" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    szkoleniaPomoc: file(name: { eq: "szkolenia-z-pierwszej-pomocy" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    planyEwakuacyjne: file(name: { eq: "plany-ewakuacyjne" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    nadzor: file(name: { eq: "nadzor" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`

export default Services
