import React from 'react'
import { Hero, Container, Heading, Image } from 'react-bulma-components/full'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import logo from '../../images/logo-styled.png'


//TODO: CROP LOGO IMAGE TO SQUARE, REMOVE img { padding-left: 1rem; }
export const BannerWrapper = styled.div`
   .hero{
      background-color: ${props => props.theme.banner};
      padding: 0 3rem;
   }
   .container{
      display: flex;
      flex-flow: column nowrap;
   }   
   .image{
      align-self: center;
   }
   img{
      width: auto;
      padding-left: 1rem;
   }
   .subtitle{
      color: white;
      align-self: center;
      text-align: center;
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
                     <br/>
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

/*
.img{
      align-self: center;
   }
   .subtitle{
      color: white;
      text-align: right;
      align-self: center;
   }   
*/