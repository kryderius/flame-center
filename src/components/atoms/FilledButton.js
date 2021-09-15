import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  width: 160px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: ${({ theme }) => theme.red};
  border: none;
  border-radius: 20px 0px;
  cursor: pointer;
  transition: all 0.4s ease-out;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.dark};

    p {
      color: ${({ theme }) => theme.dark};
    }
  }
`

const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.bodyDesktop};
  color: #fff;
  text-transform: uppercase;
`

const FilledButton = ({ children, link }) => {
  return (
    <StyledButton to={link}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  )
}

export default FilledButton
