import React from 'react'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'


const Home = () => {

   //TODO: ADD ALTs TO IMG TAGS
   return (
      <Layout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image}
                        onLoad={ e => context.handleOpacityChange(e, "home_ligitation") }
                     />
                     <PlaceholderImg 
                        src={ placeholder }
                        opacity={context.placeholderOpacities.home_ligitation}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>Employment Law Solutions</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.home.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

         </Card>
      </Layout>
   )
}

export default Home