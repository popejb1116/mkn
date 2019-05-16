import React from 'react'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const Litigation = () => {
   return (
      <Layout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image}
                        //onLoad={context.handleOpacityChange}
                        onLoad={ e => context.handleOpacityChange(e, "home_ligitation") }
                     />
                     <PlaceholderImg 
                        opacity={context.placeholderOpacities.home_ligitation}
                        src={placeholder}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>Litigation</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.litigation.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

      </Card>
   </Layout>
      
   )
}

export default Litigation