import React from 'react'
import { Hero, Container, Heading, Image } from 'react-bulma-components/full'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
//import { BannerWrapper } from '../../theme/StyledWrappers'
import logo from '../../images/logo-styled.png'

export const BannerWrapper = styled.div`
   .hero{
      background-color: ${props => props.theme.primary};
   }
   .container{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
   }
   .subtitle{
      color: white;
      text-align: right;
      align-self: flex-end;
   }   
`

const Banner = () => {
   return (
      <ThemeProvider theme={theme}>
         <BannerWrapper>
            <Hero>
               <Hero.Body>
                  <Container>
                     <Image src={logo} />
                     <Heading subtitle size={4}>
                        Licensed in NC, SC and MO
                     </Heading>
                  </Container>
               </Hero.Body>
            </Hero>
         </BannerWrapper>
      </ThemeProvider>
   )
}

export default Banner