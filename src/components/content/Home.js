import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_tn.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'


const Layout = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`

const Card = styled.div`
   background-color: ${props => props.theme.accent};
   max-width: 900px;
   margin: 2rem 0rem; 
   border: solid 3px;
   border-color: white;
   border-radius: 10px;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

const BlurUpContainer = styled.div`
   position: relative;
   margin: 0 auto;
   padding-bottom: 28.222%;
   
   img{
      max-width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      -webkit-transition: opacity 0.4s ease-in-out;
      -moz-transition: opacity 0.4s ease-in-out;
      -o-transition: opacity 0.4s ease-in-out;
      transition: opacity 0.4s ease-in-out;
   }

`
const PlaceholderImg = styled.img`
   opacity: ${props => props.opacity};
`

const CardContent = styled.div`
   padding: 1rem 2rem;
`

const CardTitle = styled.div`
   color: white;
   text-align: center;
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 0.5rem;
`

const CardText = styled.p`
   color: white;
   text-align: left;
   font-size: 1rem;
   line-height: 1.25rem;
   margin-bottom: 0.5rem;
`
const Home = () => {
   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <Card>

               <PlaceholderContext.Consumer>
                  { context => (
                     <BlurUpContainer>
                        <img
                           src={image}
                           onLoad={context.handleOpacityChange}
                        />
                        <PlaceholderImg 
                           opacity={context.placeholderOpacities.home_ligitation}
                           src={placeholder}
                        />
                     </BlurUpContainer>
                  )}                  
               </PlaceholderContext.Consumer>
               
               <CardContent>
                  <CardTitle>Employment Law Solutions</CardTitle>
                  <TextInfoContext.Consumer>{
                     context => (
                        context.state.home_paragraphs.map( paragraph => <CardText>{paragraph}</CardText> )
                     )
                  }                     
                  </TextInfoContext.Consumer>                  
               </CardContent>

            </Card>
         </Layout>
      </ThemeProvider>
   )
}

export default Home