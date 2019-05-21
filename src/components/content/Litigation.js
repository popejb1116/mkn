import React from 'react'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
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
               <CardText>{text1}</CardText>
            </CardContent>

      </Card>
   </Layout>
      
   )
}

export default Litigation

const text1 = "My firm is committed to excellence and professionalism in the thoughtful, diligent, and aggressive litigation of employment law matters in federal and state courts.  As a solo practitioner, I frequently defend small to medium sized employers in employment law litigation and also aggressively prosecute a handful of highly meritorious employee claims each year.  I strive to objectively analyze my clients' challenges from both sides of the issue without bias or puffery. I believe this gives me a very unique perspective in the world of employment law.  My firm is able to approach potential litigation from both sides of the issue, advise clients accordingly, and many times anticipate and thwart our opponents' approach either in litigation or before claims are ever filed."