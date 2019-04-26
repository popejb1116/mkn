import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'

const FooterWrapper = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-evenly;
   align-content: center;   
   color: white;
   background-color: ${props => props.theme.accent};
   text-align: center;
   font-size: 4rem;
   border-top-style: solid;
   border-top-width: 5px;
   border-color: white;
`

const Footer = () => {
   return (
      <ThemeProvider theme={theme}>
         <FooterWrapper>
            Footer!!
         </FooterWrapper>
      </ThemeProvider>
      
   )
}

export default Footer