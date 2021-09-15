import styled, { css } from "styled-components"

export default styled.h1`
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

  ${({ $headlineS }) =>
    $headlineS &&
    css`
      font-size: ${({ theme }) => theme.headingS};
    `}
  ${({ $headlineXS }) =>
    $headlineXS &&
    css`
      font-size: ${({ theme }) => theme.bodyM};
    `}
    ${({ $headlineM }) =>
    $headlineM &&
    css`
      font-size: ${({ theme }) => theme.headingM};
    `}
`
