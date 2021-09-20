import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { useCookie } from "react-use"
import Text from "../atoms/Text"
import { Link } from "gatsby"

const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: #fffaf5;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.5, 1, 0.89, 1);
  pointer-events: none;
  @media (min-width: 1200px) {
    height: 150px;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      pointer-events: all;
    `};
`

const CookieBannerContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
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
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    width: 80%;
    margin-bottom: 0;
  }
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.red};
  font-weight: ${({ theme }) => theme.bold};
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (min-width: 1200px) {
    width: 20%;
  }
`

const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.red};
  border-radius: 20px 0px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.red};
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  &:hover {
    color: ${({ theme }) => theme.dark};
    border: 1px solid ${({ theme }) => theme.dark};
    box-shadow: 0px 1px 20px 1px rgb(0, 0, 0, 0.4);
  }
`

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.dark};
  text-align: center;
  margin-bottom: 15px;
`

const Cookies = ({ canBeDisplayed, setCanBeDisplayed }) => {
  const [cookie, setCookie] = useCookie("cookie-information")

  const handleClick = () => {
    setCookie("cookie-information", {
      expires: new Date().getDate() + 7,
    })
  }

  useEffect(() => {
    setTimeout(() => setCanBeDisplayed(true), 1000)
  }, [])

  return (
    <CookieBanner $isActive={!cookie && canBeDisplayed}>
      <CookieBannerContainer>
        <TextContainer>
          <StyledText>
            Ta strona używa plików cookie w celu usprawnienia i ułatwienia
            dostępu do serwisu oraz prowadzenia danych statystycznych. Dalsze
            korzystanie z tej witryny oznacza akceptację tego stanu rzeczy.
          </StyledText>
          <StyledLink to="/polityka-prywatnosci">
            Polityka prywatności
          </StyledLink>
        </TextContainer>
        <ButtonContainer>
          <StyledButton onClick={handleClick}>Akceptuję</StyledButton>
        </ButtonContainer>
      </CookieBannerContainer>
    </CookieBanner>
  )
}

export default Cookies
