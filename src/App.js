import React from 'react'
//import logo from './logo.svg'
import './App.css'
import { Hero, Container, Heading } from 'react-bulma-components/full'

import { theme } from './theme/Theme'
import { ThemeProvider } from 'styled-components'
import { TestWrapper } from './theme/StyledWrappers'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TestWrapper>
         <Hero id="hero">
            <Hero.Body>
               <Container>
               <Heading>Bulma and Styled Comps Installed</Heading>
               <Heading subtitle size={3}>
                  We were styled with styled components
               </Heading>
               </Container>
            </Hero.Body>
         </Hero>
      </TestWrapper>
    </ThemeProvider>
  )
}

export default App
 /*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */