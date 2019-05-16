import React from 'react'
import image from '../../images/contracts.jpg'
import placeholder from '../../images/placeholders/contracts_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const Contracts = () => {
   return (
      <Layout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image}
                        onLoad={ e => context.handleOpacityChange(e, "contracts") }
                     />
                     <PlaceholderImg 
                        src={placeholder}
                        opacity={context.placeholderOpacities.contracts}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>Contracts</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.contracts.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

      </Card>
   </Layout>
   )
}

export default Contracts