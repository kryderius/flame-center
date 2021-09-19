import React from "react"

import styled from "styled-components"
import Headline from "../atoms/Headline"
import Text from "../atoms/Text"
import ButtonLink from "../atoms/ButtonLink"

import Triangles from "../../images/calltoaction-triangles.svg"

const Wrapper = styled.section`
  padding: 0 20px;
  margin: 100px 0;
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 70px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.red};
  border-radius: 50px 0px;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(4) rotate(155)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='0.5' stroke='hsla(259, 0%, 100%, 0.07)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  .calltoaction_triangles {
    width: 60px;
    position: absolute;
    top: 0;
    right: 10%;
    transform: translateY(-25%);

    @media (min-width: 1200px) {
      width: 100px;
    }
  }
`
const Title = styled(Headline)`
  font-weight: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.bodyM};
  color: #ffffff;
  line-height: 120%;

  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingS};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.headingM};
  }
`

const StyledText = styled(Text)`
  max-width: 200px;
  text-align: center;
  margin: 30px 0 60px 0;

  @media (min-width: 1200px) {
    max-width: unset;
  }
`

const CallToAction = () => {
  return (
    <Wrapper>
      <Container className="cta_animations--trigger">
        <img src={Triangles} alt="" className="calltoaction_triangles" />
        <Title
          as="h5"
          data-aos="fade-down"
          data-aos-anchor=".cta_animations--trigger"
        >
          Czekamy na Ciebie!
        </Title>
        <StyledText
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor=".cta_animations--trigger"
        >
          Skontaktuj się z nami - chętnie odpowiemy na Twoje pytania!
        </StyledText>
        <ButtonLink link="/kontakt">Kontakt</ButtonLink>
      </Container>
    </Wrapper>
  )
}

export default CallToAction
