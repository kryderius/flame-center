import React from "react"
import styled from "styled-components"
import Layout from "../templates/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Headline from "../components/atoms/Headline"
import ContactForm from "../components/organisms/ContactForm"
import Text from "../components/atoms/Text"
import { Icon } from "@iconify/react"

import Dots from "../images/thankyou-dots.svg"
import Waves from "../images/contactpage-waves.svg"

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
`

const SectionWrapper = styled.section`
  padding: 0 15px;
`

const SectionContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0;
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

const FormWrapper = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 40%;
  }
`

const Subheading = styled(Text)`
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.bodyDesktop};
`

const FormHeadline = styled(Headline)`
  color: ${({ theme }) => theme.red};
  margin: 20px 0 70px 0;
`

const ContactBlocks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    width: 60%;
  }
`

const ContactBlocksContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fffaf5;
  border-radius: 100px 0px;
  box-shadow: 0px 45px 70px -18px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  margin-top: 100px;
  position: relative;

  .right_waves {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin-top: 0px;
  }
`

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 123px;
  padding-bottom: 50px;

  &:not(:last-child) {
    border-bottom: 2px solid #e7e7e7;
    margin-bottom: 50px;
  }

  .contactpage_link {
    color: ${({ theme }) => theme.dark};
    font-weight: ${({ theme }) => theme.bold};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin-bottom: 15px;
    }
  }
`

const ThankYouContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 200px 0;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const ThankYouText = styled(Headline)`
  text-align: center;
  font-size: ${({ theme }) => theme.headingM};
  color: ${({ theme }) => theme.dark};
  text-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  position: relative;

  .thankyou--red {
    color: ${({ theme }) => theme.red};
  }

  .thankyou--orange {
    color: ${({ theme }) => theme.orange};
  }

  .left_dots {
    position: absolute;
    top: -50%;
    left: -4%;
    width: 11%;
    z-index: -1;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.headingL};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingXL};
  }
`

const ContactPage = () => {
  const data = useStaticQuery(contactData)
  return (
    <Layout>
      <PageHeader>
        <HeaderImg
          image={data.heroImg.childImageSharp.gatsbyImageData}
          alt=""
        />
        <HeaderTitle data-aos="fade-down" data-aos-delay="200">
          Kontakt
        </HeaderTitle>
      </PageHeader>
      <SectionWrapper>
        <SectionContainer>
          <FormWrapper className="contactpage_heading_animations--trigger">
            <Subheading
              data-aos="fade-down"
              data-aos-anchor=".contactpage_heading_animations--trigger"
            >
              Masz pytania? Chciałbyś dowiedzieć się więcej?
            </Subheading>
            <FormHeadline
              as="h2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor=".contactpage_heading_animations--trigger"
            >
              Napisz do nas!
            </FormHeadline>

            <ContactForm />
          </FormWrapper>
          <ContactBlocks>
            <ContactBlocksContainer className="contactpage_blocks_animation--trigger">
              <img className="right_waves" src={Waves} alt="" />

              <ContactBlock
                data-aos="zoom-in-up"
                data-aos-anchor=".contactpage_blocks_animation--trigger"
                data-aos-offset="500"
              >
                <a
                  href="https://www.google.com/maps/dir//Warszawa/@52.2330653,20.9211124,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!2m2!1d21.0122287!2d52.2296756!3e0?hl=pl-PL"
                  className="contactpage_link"
                >
                  <Icon
                    icon="eva:pin-outline"
                    color="#f03600"
                    width="66"
                    height="66"
                  />
                  Adres
                </a>
              </ContactBlock>
              <ContactBlock
                data-aos="zoom-in-up"
                data-aos-delay="200"
                data-aos-anchor=".contactpage_blocks_animation--trigger"
                data-aos-offset="500"
              >
                <a href="tel:600502072" className="contactpage_link">
                  <Icon
                    icon="ic:outline-phone"
                    color="#f03600"
                    width="66"
                    height="66"
                  />
                  600 502 072
                </a>
              </ContactBlock>
              <ContactBlock
                data-aos="zoom-in-up"
                data-aos-delay="400"
                data-aos-anchor=".contactpage_blocks_animation--trigger"
                data-aos-offset="500"
              >
                <a
                  href="mailto:kontakt@flamecenter.pl"
                  className="contactpage_link"
                >
                  <Icon
                    icon="carbon:email"
                    color="#f03600"
                    width="66"
                    height="66"
                  />
                  kontakt@flamecenter.pl
                </a>
              </ContactBlock>
            </ContactBlocksContainer>
          </ContactBlocks>
        </SectionContainer>
        <ThankYouContainer>
          <ThankYouText as="h5" data-aos="zoom-out-down">
            Dziękujemy <span className="thankyou--red">Ci</span>, że jesteś{" "}
            <span className="thankyou--orange">z nami!</span>
            <img src={Dots} alt="" className="left_dots" />
          </ThankYouText>
        </ThankYouContainer>
      </SectionWrapper>
    </Layout>
  )
}

const contactData = graphql`
  {
    heroImg: file(name: { eq: "hero_image" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: WEBP)
      }
    }
  }
`

export default ContactPage
