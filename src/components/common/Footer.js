import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import { Heading, Image } from 'react-bulma-components/full'
import logo from '../../images/logo-styled.png'

const FooterWrapper = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-evenly;
   align-content: center;
   background-color: ${props => props.theme.accent};
   padding-top: 3rem;
   border-top-style: solid;
   border-top-width: 5px;
   border-color: white;
   text-align: center;

   .title{      
      color: white;
      margin: 0.5rem;
   }

   .image{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      padding-bottom: 1rem;

      img{
      max-width: 150px;
      align-self: flex-end;
      }
   }
      
`

const Footer = () => {
   return (
      <ThemeProvider theme={theme}>
         <FooterWrapper>            
            <Heading size={2}>Litigation. Contracts. HR Consulting.</Heading>            
            <Heading size={6}>1927 S. TRYON ST. SUITE 106, CHARLOTTE, NC 28203</Heading>
            <Heading size={6}>OFFICE: 704.280.8529 FAX: 980.939.6389</Heading>
            <Heading size={6}>INFO@MKNEMPLOYMENTLAW.COM</Heading>
            <Image src={logo} />
         </FooterWrapper>
      </ThemeProvider>      
   )
}

export default Footer