import React from "react"

import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Headline from "../atoms/Headline"
import Text from "../atoms/Text"

const Wrapper = styled.section`
  padding: 0 20px;
  margin: 100px 0;
`

const Container = styled.div`
  margin: 0 auto;
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

const Left = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 50%;
    //margin-right: 100px;
    padding-right: 100px;
  }
`

const Right = styled.div`
  width: 100%;
  margin-top: 100px;
  @media (min-width: 1200px) {
    width: 50%;
    margin-top: 200px;
    padding-right: 100px;
  }
`

const Title = styled(Headline)`
  color: ${({ theme }) => theme.dark};
  margin: 50px 0 30px 0;

  .red-text {
    color: ${({ theme }) => theme.red};
  }
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.dark};
`

const WhyUs = () => {
  const data = useStaticQuery(WhyUsImages)
  return (
    <Wrapper id="about-us">
      <Container>
        <Left>
          <GatsbyImage image={data.whyUs.childImageSharp.gatsbyImageData} />
          <Title as="h3" data-aos="fade-down">
            Dlaczego <span className="red-text">Flame Center?</span>
          </Title>
          <StyledText data-aos="fade-up">
            Flame Center to zgrany zespół inżynierów pożarnictwa i ratowników
            medycznych, posiadający ogromne doświadczenie w zakresie usług ppoż.
            oraz szkoleń pierwszej pomocy.
            <br />
            <br />
            Na co dzień dbamy o bezpieczeństwo pełniąc służbę w Państwowej
            Straży Pożarnej oraz Wojewódzkim Pogotowiu Ratunkowym, dzięki czemu
            doskonale wiemy jak przygotować budynki, sprzęt gaśniczy oraz
            personel pod kątem ochrony ppoż.
          </StyledText>
        </Left>
        <Right>
          <GatsbyImage
            image={data.wideServices.childImageSharp.gatsbyImageData}
          />
          <Title as="h3" data-aos="fade-down">
            Szeroki zakres usług
          </Title>
          <StyledText data-aos="fade-up">
            W naszej ofercie posiadamy szeroki zakres usług, m.in. przegląd,
            konserwacja i naprawa podręcznego sprzętu gaśniczego, doradztwo w
            zakresie bezpieczeństwa pożarowego, szkolenia ppoż. i pierwszej
            pomocy, sporządzanie dokumentacji ppoż.
            <br />
            <br />
            Nie kierujemy się schematami, do każdego zlecenia podchodzimy
            indywidualnie, co gwarantuje zadowolenie z naszych usług.
          </StyledText>
        </Right>
      </Container>
    </Wrapper>
  )
}

const WhyUsImages = graphql`
  {
    whyUs: file(name: { eq: "why-flame-center" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
    wideServices: file(name: { eq: "wide-services" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`

export default WhyUs
