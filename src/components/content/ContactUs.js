import React, {Fragment} from 'react'
import image from '../../images/ee-law.jpg'
import placeholder from '../../images/placeholders/ee-law_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const InlineLink = styled.div`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
   &:hover{
      cursor: pointer;
   }
`

const TextWrapper = styled.div`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
`

const ContactUs = props => {

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

               <TextInfoContext.Consumer>
                  {context => (
                     <Fragment>
                        <InlineLink 
                           onClick={() => props.history.push("/contact-us/business")}
                        >CLICK HERE
                        </InlineLink>
                        <TextWrapper>{text1}</TextWrapper>
                        <br/>
                        <br/>
                        <TextWrapper>{text2}</TextWrapper>
                     </Fragment>
                  )}
               </TextInfoContext.Consumer>
            </CardContent>

         </Card>
      </Layout>
   )
}

export default withRouter(ContactUs)


const text1 = " to submit our online business form or call our founding attorney directly at 704.249.2263 to discuss an initial no cost half day on-site human resources analysis and workplace audit."
const text2 = "*Legal Disclaimer and Terms and Conditions of Website Use.  We will make our best efforts to respond to your inquiries, however, please note that due to our current caseload, calendars, and sheer volume of clients seeking representation, some inquiries may not be reached. The submission of information in  no manner guarantees a response in any manner. No attorney-client relationship is formed until an individually signed/written fee agreement and authority to represent is mutually entered into between yourself and the firm. The submission of this basic information via online form; a telephone message to our firm voicemail; or the exchange of information with representatives of our firm as part of the basic information gathering process does not create an attorney client relationship.  Individuals are notified that they should have no expectation of legal advice or an attorney client relationship, or legal services, until a written fee agreement and authority to represent is executed with our firm.  Nothing in this website, firm blog, or any other social media or digital platform constitutes legal advice and should not be taken as such."