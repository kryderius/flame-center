import React, { useState, useEffect, useRef } from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { scroller } from "react-scroll"
import FilledButton from "../atoms/FilledButton"
import ButtonLink from "../atoms/ButtonLink"
import { Icon } from "@iconify/react"

const Wrapper = styled.header`
  height: 75px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 1200px) {
    height: 100px;
  }

  &.nav--fixed {
    background-color: white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 75px;

    .nav-container {
      height: 75px;

      ul li a {
        color: ${({ theme }) => theme.dark};
      }

      .logo-wrapper {
        svg > path:not(:nth-child(1)) {
          fill: black;
        }
      }
    }

    .logo-wrapper {
      @media (min-width: 1200px) {
        width: 120px;
      }
    }

    .hamburger div {
      background-color: ${({ theme }) => theme.dark};
    }
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    height: 100px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

const LogoWrapper = styled(Link)`
  width: 90px;

  svg {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 180px;
  }
`

const Hamburger = styled.button`
  position: relative;
  width: 40px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1080;
  @media (min-width: 1200px) {
    display: none;
  }
  .hamburger--center {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
    width: 80%;
    height: 3px;
    background: white;
    transition: opacity 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }
  .hamburger--top {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: white;
    transition: all 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }
  .hamburger--bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: white;
    transition: all 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }
  &.open {
    .hamburger--center {
      opacity: 0;
    }
    .hamburger--top {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      transform-origin: center;
    }
    .hamburger--bottom {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
      transform-origin: center;
    }
  }
`

const NavMobile = styled.div`
  visibility: hidden;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.red};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1070;
  transform: translateX(-100%);
  transition: all 0.8s cubic-bezier(0.5, 1, 0.89, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
  &.open {
    visibility: visible;
    transform: translateX(0);
  }
`

const NavMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  .dropdown_mobile {
    .dropdown_arrow {
      transform: translateY(25%);
      margin-left: 10px;
    }
  }
`

const NavMobileListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  p {
    cursor: pointer;
  }
`

const NavDesktop = styled.ul`
  display: none;
  list-style-type: none;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`

const NavDesktopItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: ${({ theme }) => theme.bold};
  }

  &.dropdown {
    position: relative;

    .dropdown_arrow {
      transform: translateY(25%);
      margin-left: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 200px;
      height: 26px;
      background-color: transparent;
      bottom: 0;
      left: 0;
      transform: translate(-40%, 100%);
    }
  }
  &.dropdown:hover {
    .dropdown_menu {
      visibility: visible;
      opacity: 1;
    }
  }
`

const DropdownMenu = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: -26px;
  left: 0;
  background-color: white;
  width: 300px;
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  transform: translate(-40%, 100%);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  li a {
    color: ${({ theme }) => theme.dark};
  }

  li {
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const DropdownMenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 75px;
  transform: translateY(-100%);
  background-color: ${({ theme }) => theme.red};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.dropdown_mobile--open {
    visibility: visible;
    transform: translateY(0%);

    li {
      margin-bottom: 15px;
    }
  }
`

const BackButton = styled.button`
  position: absolute;
  top: 17px;
  left: 15px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;

  svg {
    width: 100%;
  }
`

const DropdownMenuItems = [
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
    name: "Hydranty wewnętrzne i zewnętrzne",
    link: "hydranty-wewnetrzne-i-zewnetrzne",
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

const Navigation = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState(false)
  const posY = useRef(5)

  useEffect(() => {
    const handleScroll = () => {
      let currentPosY = window.scrollY
      if (posY.current > currentPosY && !isVisible) {
        setVisible(true)
      }
      if (posY.current < currentPosY && isVisible) {
        setVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  const openHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen)
  }

  const shouldOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

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
    openHamburger()
  }

  return (
    <Wrapper className={!isVisible && "nav--fixed"}>
      <Container className="nav-container">
        <LogoWrapper to="/" className="logo-wrapper">
          <svg
            width="181"
            height="64"
            viewBox="0 0 181 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.0316 26.2911C39.7704 28.3306 35.158 31.4374 29.2332 34.1024C28.2054 46.3727 34.827 53.3453 34.827 53.3453C37.382 52.5715 42.2587 48.9552 42.2587 48.9552C42.2587 53.3453 39.6855 62.901 39.6855 62.901C39.6855 62.901 48.6935 55.9098 51.5291 44.298C54.3611 32.6862 46.1349 21.0287 46.1349 21.0287C46.6306 29.2473 43.8606 37.3306 38.4335 43.506C38.705 43.1913 38.9328 42.842 39.1078 42.4633C40.0828 40.5061 41.9483 38.0712 41.0316 26.2911Z"
                fill="#E37A0B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.9079 31.5155C28.9079 31.5155 14.2177 39.9116 21.1701 62.9065C21.1701 62.9065 3.86841 50.7716 12.9056 31.6509C15.4828 26.197 17.6388 22.1097 19.3744 18.8194C23.7248 10.572 25.4339 7.33202 24.5142 0.130005C24.5142 0.130005 39.4413 7.10294 40.7315 23.639C39.3456 25.6502 33.5497 29.2444 28.9079 31.5155Z"
                fill="#F03600"
              />
            </g>
            <path
              d="M77.2203 28.2506V23.6223H68.9782V18.7088H78.7736V13.9537H63.8428V37.4119H68.9782V28.2506H77.2203Z"
              fill="white"
            />
            <path
              d="M90.7573 13.9537H85.6219V37.4119H100.014V32.6569H90.7573V13.9537Z"
              fill="white"
            />
            <path
              d="M110.386 37.4119L112.066 32.4667H119.642L121.291 37.4119H126.743L118.406 13.9537H113.398L105.029 37.4119H110.386ZM115.236 23.1468C115.521 22.2909 115.775 21.4033 115.87 20.8644C115.965 21.435 116.251 22.3543 116.504 23.1468L118.184 28.1555H113.556L115.236 23.1468Z"
              fill="white"
            />
            <path
              d="M137.779 37.4119V30.85C137.779 28.2823 137.747 26.3168 137.462 24.5733L142.407 37.4119H147.099L152.076 24.5733C151.822 26.3168 151.822 27.4264 151.822 32.4984V37.4119H156.799V13.9537H151.759L144.753 31.4523L137.779 13.9537H132.802V37.4119H137.779Z"
              fill="white"
            />
            <path
              d="M179.913 37.4119V32.6569H170.149V27.8068H178.803V23.3053H170.149V18.7088H179.913V13.9537H165.014V37.4119H179.913Z"
              fill="white"
            />
            <path
              d="M73.9869 63.3287C79.8514 63.3287 84.2261 59.8734 85.0503 54.6428H79.7246C79.0906 56.9569 76.9667 58.3834 74.082 58.3834C70.3097 58.3834 67.9638 55.6255 67.9638 51.2192C67.9638 46.7494 70.278 44.0549 74.082 44.0549C76.9033 44.0549 78.9004 45.3863 79.5978 47.7321H85.0186C84.2895 42.4699 80.0733 39.1097 74.2088 39.1097C67.203 39.1097 62.5431 43.9281 62.5431 51.2509C62.5431 58.6687 66.9494 63.3287 73.9869 63.3287Z"
              fill="white"
            />
            <path
              d="M101.577 62.9483V58.1932H91.8133V53.3431H100.468V48.8417H91.8133V44.2451H101.577V39.4901H86.6779V62.9483H101.577Z"
              fill="white"
            />
            <path
              d="M109.044 62.9483V48.0491L118.934 62.9483H124.006V39.4901H118.934V54.4209L109.044 39.4901H103.972V62.9483H109.044Z"
              fill="white"
            />
            <path
              d="M125.278 44.2451H131.936V62.9483H137.071V44.2451H143.728V39.4901H125.278V44.2451Z"
              fill="white"
            />
            <path
              d="M159.897 62.9483V58.1932H150.134V53.3431H158.788V48.8417H150.134V44.2451H159.897V39.4901H144.998V62.9483H159.897Z"
              fill="white"
            />
            <path
              d="M167.427 62.9483V54.7379H171.39L174.909 62.9483H180.52L176.399 53.6284C178.998 52.297 180.298 50.1414 180.298 47.0981C180.298 42.248 177.064 39.4901 171.358 39.4901H162.292V62.9483H167.427ZM167.427 44.0549H171.358C173.641 44.0549 174.877 45.1327 174.877 47.0981C174.877 49.0953 173.577 50.2365 171.327 50.2365H167.427V44.0549Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0">
                <rect
                  width="62.5431"
                  height="62.7773"
                  fill="white"
                  transform="translate(0 0.130005)"
                />
              </clipPath>
            </defs>
          </svg>
        </LogoWrapper>
        <Hamburger
          onClick={openHamburger}
          className={isHamburgerOpen ? "hamburger open" : "hamburger"}
        >
          <div className="hamburger--center"></div>
          <div className="hamburger--top"></div>
          <div className="hamburger--bottom"></div>
        </Hamburger>
        <NavDesktop>
          <NavDesktopItem>
            <a href="/#hero" onClick={e => scrollToSection(e, "hero")}>
              Start
            </a>
          </NavDesktopItem>

          <NavDesktopItem>
            <a href="/#services" onClick={e => scrollToSection(e, "about-us")}>
              O nas
            </a>
          </NavDesktopItem>

          <NavDesktopItem className="dropdown">
            <a href="#">
              Usługi
              <Icon
                icon="ant-design:caret-down-filled"
                className="dropdown_arrow"
              />
            </a>
            <DropdownMenu className="dropdown_menu">
              {DropdownMenuItems.map(item => (
                <NavDesktopItem key={item.id}>
                  <Link to={`/${item.link}`}>{item.name}</Link>
                </NavDesktopItem>
              ))}
            </DropdownMenu>
          </NavDesktopItem>
          <FilledButton link="/kontakt">Kontakt</FilledButton>
        </NavDesktop>
      </Container>
      <NavMobile className={isHamburgerOpen && "open"}>
        <NavMobileList>
          <NavMobileListItem>
            <a href="/#hero" onClick={e => scrollToSection(e, "hero")}>
              Start
            </a>
          </NavMobileListItem>
          <NavMobileListItem>
            <a href="/#services" onClick={e => scrollToSection(e, "about-us")}>
              O nas
            </a>
          </NavMobileListItem>
          <NavMobileListItem className="dropdown_mobile">
            <a href="#" onClick={shouldOpenDropdown}>
              Usługi
              <Icon
                icon="ant-design:caret-down-filled"
                className="dropdown_arrow"
              />
            </a>
          </NavMobileListItem>
          <DropdownMenuMobile
            className={openDropdown ? "dropdown_mobile--open" : ""}
          >
            {DropdownMenuItems.map(item => (
              <NavMobileListItem key={item.id}>
                <Link to={`/${item.link}`}>{item.name}</Link>
              </NavMobileListItem>
            ))}
            <BackButton onClick={shouldOpenDropdown}>
              <Icon
                icon="akar-icons:arrow-left"
                color="white"
                width="40"
                height="40"
              />
            </BackButton>
          </DropdownMenuMobile>

          <ButtonLink link="/kontakt">Kontakt</ButtonLink>
        </NavMobileList>
      </NavMobile>
    </Wrapper>
  )
}

export default Navigation
