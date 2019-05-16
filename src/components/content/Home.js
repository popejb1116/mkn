import React, { Fragment } from 'react'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_tn.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const Home = () => {
   return (
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
   )
}

export default Home