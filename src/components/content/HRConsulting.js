import React from 'react'
import image from '../../images/hr-consulting.jpg'
import placeholder from '../../images/placeholders/hr-consulting_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const HRConsulting = () => {
   return (
      <Layout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image}
                        onLoad={ e => context.handleOpacityChange(e, "hr_consulting") }
                     />
                     <PlaceholderImg 
                        opacity={context.placeholderOpacities.hr_consulting}
                        src={placeholder}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>HR Consulting</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.hr_consulting.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

      </Card>
   </Layout>
   )
}

export default HRConsulting