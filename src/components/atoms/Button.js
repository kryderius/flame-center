import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 160px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 20px 0px;
  cursor: pointer;
  transition: all 0.4s ease-out;
  text-decoration: none;

  &:hover {
    background-color: #fff;

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

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  )
}

export default Button
