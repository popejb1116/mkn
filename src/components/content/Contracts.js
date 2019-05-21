import React from 'react'
import image from '../../images/contracts.jpg'
import placeholder from '../../images/placeholders/contracts_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
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
               
               <CardText>{text1}</CardText><br/><br/>
               <CardText>{text2}</CardText><br/><br/>
               <CardText>{text3}</CardText><br/><br/>
               <CardText>{text4}</CardText><br/><br/>
               <CardText>{text5}</CardText><br/><br/>
               <CardText>{text6}</CardText><br/><br/>
               <CardText>{text7}</CardText><br/><br/>
               <CardText>{text8}</CardText>
            </CardContent>

      </Card>
   </Layout>
   )
}

export default Contracts

const text1 = "My firm frequently advises small to mid-size businesses on contractual arrangements and works closely with management to prepare highly customized employment agreements.  These contracts often include complex compensation arrangements, detailed performance expectations, and other unique terms and conditions with one goal in mind: to memorialize the business owner's goals and expectations, minimize risk, and maximize an employee's potential to accomplish employer expectations through the proper employment framework."
const text2 = "These type of employment contracts may include, for example, a highly complex commission compensation arrangement for an experienced doctor; a renewable for cause contract with a modified termination provision following an initial term for a board appointed executive director; a conditional ownership purchase option integrated into an employment contract for a business partner employee; an agreement of non-competition and non-solicitation for a current employee along with a release of prior claims; or an offer letter memorializing at-will employment with appropriate language to create a fixed-salary fluctuating workweek arrangement under federal wage and hour regulations."
const text3 = "Quite simply, my firm prepares, drafts, and reviews a wide variety of employment contracts with an eye towards attention to detail, creativity, and a strong grounding in contract law."
const text4 = "I also frequently review many of these same types of contracts for individual employees, including non-competition agreements, non-solicitation agreements, severance agreements, or standard employment contracts, in addition to the negotiation of these agreements with a positive approach to the new employment relationship."
const text5 = "My firm's experience on both sides of contractual disputes gives me a very unique perspective."
const text6 = "I am able to review and analyze an employer's contract with knowledge and experience in the disputes or claims an individual employee may claim under the contract."
const text7 = "I am able to review an employee's contract with an eye towards the defenses or claims the employer will raise to the contract's enforceability."
const text8 = "Ask our clients.  Ask our opponents.  MKN means employment contracts."

         
         
         
         
         
         
         