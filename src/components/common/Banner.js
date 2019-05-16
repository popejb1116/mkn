import React from 'react'
import { Hero, Container, Heading, Image } from 'react-bulma-components/full'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import logo from '../../images/logo-styled.png'


//TODO: CROP LOGO IMAGE TO SQUARE, REMOVE img { padding-left: 1rem; }
export const BannerWrapper = styled.div`
   .hero{
      background-color: ${props => props.theme.primary};
      padding: 0 3rem;
   }
   .hero-body{
      padding: 2rem 1.5rem;
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
      <BannerWrapper>
         <Hero>
            <Hero.Body>
               <Container>
                  <Image src={logo} />
               </Container>
            </Hero.Body>
         </Hero>
      </BannerWrapper>
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