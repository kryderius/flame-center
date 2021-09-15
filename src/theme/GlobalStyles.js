import { createGlobalStyle } from "styled-components"
import "./typography.css"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family:  ${({ theme }) => theme.fontFamily};
  }
  
  #___gatsby {
    overflow: hidden;
  }

`

export default GlobalStyles
