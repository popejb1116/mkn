import React from 'react'
import image from '../../images/ee-law.jpg'
import placeholder from '../../images/placeholders/ee-law_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'


const ContactUs = () => {
   return (
      <Layout>
         <Card>

            <PlaceholderContext.Consumer>
               { context => (
                  <BlurUpContainer>
                     <img
                        src={image}
                        onLoad={ e => context.handleOpacityChange(e, "ee_law") }
                     />
                     <PlaceholderImg 
                        opacity={context.placeholderOpacities.ee_law}
                        src={placeholder}
                     />
                  </BlurUpContainer>
               )}                  
            </PlaceholderContext.Consumer>
            
            <CardContent>
               <CardTitle>Contact Us</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.contact_us.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

         </Card>
      </Layout>
   )
}

export default ContactUs