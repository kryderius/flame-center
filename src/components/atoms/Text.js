import styled, { css } from "styled-components"

export default styled.p`
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.bodyXS};
  color: #ffffff;
  line-height: 120%;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
  }
  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.bodyDesktop};
  }

  ${({ $isDark }) =>
    $isDark &&
    css`
      color: ${({ theme }) => theme.dark};
    `}
`
