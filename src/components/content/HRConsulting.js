import React from 'react'
import image from '../../images/hr-consulting.jpg'
import placeholder from '../../images/placeholders/hr-consulting_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText, InlineLink } from './_ContentStyledComponents'
import { withRouter } from 'react-router-dom'

const HRConsulting = props => {
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
               
               <CardText>{text1}</CardText><br/><br/>
               <CardText>{text2}</CardText><br/><br/>
               <CardText>{text3}</CardText><br/><br/>
               <CardText>{text4}</CardText><br/><br/>
               <CardText>{text5}</CardText><br/><br/>
               <CardText>{text6}</CardText><br/><br/>
               
               <CardText>{text7}</CardText>
               <InlineLink
                  onClick={() => props.history.push('/contact-us/business')}
               >BUSINESS EMPLOYER INFORMATION FORM</InlineLink>
               <CardText>{text8}</CardText>
            </CardContent>

      </Card>
   </Layout>
   )
}

export default withRouter(HRConsulting)

const text1 = "My firm fundamentally understands the challenges facing human resources officials and small to mid-size business owners.  As a small business owner with a business management and marketing background, I am able to leverage my business knowledge and years of employment law litigation experience to advise employers on all facets of personnel, human resources, and employment law legal matters."
const text2 = "I frequently advise businesses on the risk, viability, and recommended course of action regarding employee terminations."
const text3 = "My firm regularly prepares and drafts employee handbooks ranging from the creation of a blank document from scratch, after consultation with a growing business, to mid-level legal reviews of existing handbooks, all the way to a higher level in-depth analysis of a single complicated policy - such as an exempt salary deduction policy, overtime pay policy for dual role employees, disability accommodation policy, or a fluctuating workweek arrangement for non-exempt salaried employees."
const text4 = "My firm conducts internal investigations as to employee complaints, including sexual harassment or retaliation, and provides opinions as to prompt and appropriate remedial action."
const text5 = "My firm conducts compliance audits to assure compliance with the panoply of ever changing employment laws such as I-9 or E-Verify work authorization document retention, payroll records retention, employee time keeping practices, and literally all other employment law considerations affecting the modern day employer."
const text6 = "My firm offers a complimentary no-obligation on-site business human resources consultation and a no-cost initial compliance summary to new business clients."
const text7 = "Fill out our "
const text8 = " to schedule a complimentary on site consultation today."           



