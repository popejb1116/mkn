import React from 'react'
import image from '../../images/home_litigation.jpg'
import placeholder from '../../images/placeholders/home_litigation_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText, InlineLink, CardText2 } from './_ContentStyledComponents'
import { withRouter } from 'react-router-dom'

const Home = props => {

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

               <CardText>{text1}</CardText>
               <br/><br/>
               
               <CardText>{text2}</CardText>
               <br/><br/>

               <InlineLink 
                  onClick={() => props.history.push("/litigation")}
               >EMPLOYMENT LAW LITIGATION
               </InlineLink>
               <CardText>{text3}</CardText>
               <br/><br/>

               <InlineLink 
                  onClick={() => props.history.push("/contracts")}
               >EMPLOYMENT CONTRACTS
               </InlineLink>
               <CardText>{text4}</CardText>
               <br/><br/>

               <InlineLink 
                  onClick={() => props.history.push("/hrconsulting")}
               >HR CONSULTING
               </InlineLink>
               <CardText>{text5}</CardText>
               <br/><br/>

               <InlineLink 
                  onClick={() => props.history.push("/contact-us")}
               >CLICK HERE
               </InlineLink>
               <CardText>{text6}</CardText>
            </CardContent>

         </Card>
      </Layout>
   )
}

export default withRouter(Home)

const text1 = "The Law Office of Mark N. Kerkhoff, PLLC is an exclusive employment law firm representing small to mid-size businesses and select individuals across North and South Carolina."
const text2 = "As a sole practitioner, I am honored to maintain a Martindale-Hubbell Ratting of 'AV Preeminent' Peer Review Rated, the highest rating available as to ethical standards and professional ability in the prestigious Martindale-Hubbell system, in addition to recognition for multiple years in the Super Lawyers Rising Stars edition.  My firm strives to provide sophisticated and aggressive employment law litigation counsel as well as value centered HR solutions for small to mid-size employers."
const text3 = " - With experience at one of the largest labor and employment law defense firms in the nation, my firm represents select businesses seeking aggressive, diligent, and value centered employment law defense litigation counsel. My firm defends small to mid-size employers both in court and before administrative agencies such as the Equal Employment Opportunity Commission, Department of Labor, and other state and federal agencies.  I also represent a limited number of individual employees in court with highly meritorious employment law litigation claims."
const text4 = " - My practice means employment contracts.  A central focus of my practice is the drafting, preparation, review, and enforcement of employment contracts such as agreements not to compete, confidentiality agreements, severance agreements, non-solicitation documents, apprenticeship documents, independent contractor arrangements, and literally all other contracts arising out of the employment relationship."
const text5 = " - My firm provides human resources consulting services to small and mid-sized businesses seeking to prevent costly employment disputes and avoid protracted litigation. I frequently advise businesses with comprehensive, step-by-step plans to assure compliance with the myraid of dynamic employment regulations in today's modern regulatory environment. This includes reviews of high risk employee terminations, reviews of existing employee handbooks, the formulation of employment policies, responses to individual employee challenges, and regulatory compliance audits.  My firm offers an initial complimentary on-site human resources consultation along with a free initial compliance analysis to small and mid-sized employers."
const text6 = " to contact us today."