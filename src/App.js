import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "./components/header/header-component.jsx"
import HomePage from "./pages/homepage/homepage.component.jsx"
import { createGlobalStyle } from "styled-components"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <GlobalStyle />
    </ThemeProvider>
  )
}

const theme = {
  primary: "#333333",
  secondary: "purple",
  red: "#FF0000",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  mdBreakPoint: "768px",
  mainWidth: "800px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans',sans-serif;
    color: #333333;
    background:  #fff; 
  }`

export default App
