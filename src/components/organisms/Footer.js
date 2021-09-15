import React from "react"
import styled from "styled-components"

import LogoDark from "../../images/logo_dark.png"
import Text from "../atoms/Text"
import { scroller } from "react-scroll"
import { Link, navigate } from "gatsby"
import { Icon } from "@iconify/react"

const Wrapper = styled.footer`
  padding: 0 15px;
  background-color: #fffaf5;
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    margin-top: 40px;
    @media (min-width: 1200px) {
      margin-top: 0;
    }
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  .footer_logo {
    width: 40%;

    @media (min-width: 1200px) {
      width: 50%;
    }
  }

  &.column--centered {
    align-items: center;

    @media (min-width: 1200px) {
      align-items: flex-start;
    }
  }
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.bodyXS};
  &.footer_text--bold {
    font-weight: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.bodyDesktop};
  }

  &.margin--topbottom {
    margin: 40px 0 15px 0;
  }

  &.margin--bottom {
    margin-bottom: 20px;
  }
`

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const MenuListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.dark};
    text-decoration: none;

    &.contact_link {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`

const CopyrightsText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  color: ${({ theme }) => theme.dark};
`

const Copyrights = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.red};

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const FooterMenuItems = [
  {
    id: 1,
    name: "Instrukcja bezpieczeństwa pożarowego",
    link: "instrukcja-ppoz",
  },
  {
    id: 2,
    name: "Audyt przeciwpożarowy",
    link: "audyt-ppoz",
  },
  {
    id: 3,
    name: "Operat przeciwpożarowy",
    link: "operat-ppoz",
  },
  {
    id: 4,
    name: "Gaśnice",
    link: "gasnice",
  },
  {
    id: 5,
    name: "Hydranty",
    link: "hydranty",
  },
  {
    id: 6,
    name: "Szkolenia przeciwpożarowe",
    link: "szkolenia-ppoz",
  },
  {
    id: 7,
    name: "Szkolenie z zakresu udzielania pierwszej pomocy ",
    link: "szkolenia-z-zakresu-pierwszej-pomocy",
  },
  {
    id: 8,
    name: "Plany ewakuacyjne",
    link: "plany-ewakuacyjne",
  },
  {
    id: 9,
    name: "Nadzór przeciwpożarowy nad obiektem",
    link: "nazdor-ppoz-nad-obiektem",
  },
]

const Footer = () => {
  const scrollToSection = (e, target) => {
    e.preventDefault()
    if (window.location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 1500,
          smooth: "easeOutQuad",
          offset: -100,
        })
      }, 1000)
    } else {
      scroller.scrollTo(target, {
        duration: 1500,
        smooth: "easeOutQuad",
        offset: -100,
      })
    }
  }
  return (
    <Wrapper>
      <Container>
        <Column className="column--centered">
          <img src={LogoDark} alt="Footer Logo" className="footer_logo" />
          <StyledText className="footer_text--bold margin--topbottom">
            Flame Center
          </StyledText>
          <StyledText>Profesjonalne usługi PPOŻ i BHP.</StyledText>
        </Column>
        <Column>
          <StyledText className="footer_text--bold margin--bottom">
            Menu
          </StyledText>
          <MenuList>
            <MenuListItem>
              <a
                href="/"
                onClick={e => {
                  scrollToSection(e, "hero")
                }}
              >
                Start
              </a>
            </MenuListItem>
            <MenuListItem>
              <a
                href="/#about-us"
                onClick={e => {
                  scrollToSection(e, "about-us")
                }}
              >
                O nas
              </a>
            </MenuListItem>
            <MenuListItem>
              <a
                href="/#services"
                onClick={e => {
                  scrollToSection(e, "services")
                }}
              >
                Usługi
              </a>
            </MenuListItem>
            <MenuListItem>
              <Link to="/kontakt">Kontakt</Link>
            </MenuListItem>
            <MenuListItem>
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            </MenuListItem>
          </MenuList>
        </Column>
        <Column>
          <StyledText className="footer_text--bold margin--bottom">
            Usługi
          </StyledText>
          <MenuList>
            {FooterMenuItems.map(item => (
              <MenuListItem>
                <Link to={item.link}>{item.name}</Link>
              </MenuListItem>
            ))}
          </MenuList>
        </Column>
        <Column>
          <StyledText className="footer_text--bold margin--bottom">
            Kontakt
          </StyledText>
          <MenuList>
            <MenuListItem>
              <a href="mailto:kontakt@flamecenter.pl" className="contact_link">
                <Icon
                  icon="clarity:email-solid"
                  color="#2c2321"
                  width="25"
                  height="25"
                />
                kontakt@flamecenter.pl
              </a>
            </MenuListItem>
            <MenuListItem>
              <a href="tel:600502072" className="contact_link">
                <Icon
                  icon="bx:bxs-phone"
                  color="#2c2321"
                  width="25"
                  height="25"
                />
                600 502 072
              </a>
            </MenuListItem>
            <MenuListItem>
              <a
                href="https://www.google.com/maps/dir//Warszawa/@52.2330653,20.9211124,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!2m2!1d21.0122287!2d52.2296756!3e0?hl=pl-PL"
                className="contact_link"
              >
                <Icon
                  icon="bi:pin-map-fill"
                  color="#2c2321"
                  width="25"
                  height="25"
                />
                Adres
              </a>
            </MenuListItem>
          </MenuList>
        </Column>
      </Container>
      <Copyrights>
        <CopyrightsText>
          Flame Center @ {new Date().getFullYear()} Wszelkie prawa zastrzeżone
        </CopyrightsText>
      </Copyrights>
    </Wrapper>
  )
}

export default Footer
