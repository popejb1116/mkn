import React from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/home_litigation.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'


const Home = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={image} />                  
               <Card.Content>
                  <Heading size={3}>
                     Employment Law Solutions
                  </Heading>
                  <br/>
                  <Heading subtitle renderAs="p">
                     The Law Office of Mark N. Kerkhoff, PLLC is an exclusive employment law firm representing small to mid-size businesses and select individuals across North and South Carolina. 
                  </Heading>            
                  <Heading subtitle renderAs="p">
                     As a sole practitioner, I am honored to maintain a Martindale-Hubbell Ratting of 'AV Preeminent' Peer Review Rated, the highest rating available as to ethical standards and professional ability in the prestigious Martindale-Hubbell system, in addition to recognition for multiple years in the Super Lawyers Rising Stars edition.  My firm strives to provide sophisticated and aggressive employment law litigation counsel as well as value centered HR solutions for small to mid-size employers.
                  </Heading>
               </Card.Content>
            </Card>            
         </CardWrapper>
      </ThemeProvider>
   )
}

export default Home


