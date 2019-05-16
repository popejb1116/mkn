import React from 'react'
import styled from 'styled-components'
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
   width: 100%;

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
      <FooterWrapper>            
         <Heading size={3}>Litigation. Contracts. HR Consulting.</Heading>            
         <Heading size={5}>1927 S. TRYON ST. SUITE 106, CHARLOTTE, NC 28203</Heading>
         <Heading size={6}>OFFICE: 704.280.8529 FAX: 980.939.6389</Heading>
         <Heading size={6}>INFO@MKNEMPLOYMENTLAW.COM</Heading>
         <Image src={logo} />
      </FooterWrapper>
   )
}

export default Footer