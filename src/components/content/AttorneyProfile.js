import React from 'react'
import image from '../../images/ee-law.jpg'
import placeholder from '../../images/placeholders/ee-law_placeholder.jpg'
import { PlaceholderContext } from '../../context/PlaceholderContext'
import { Layout, Card, BlurUpContainer, PlaceholderImg, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const AttorneyProfile = () => {
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
               <CardTitle>Attorney Profile</CardTitle>
              
               <CardText>{text1}</CardText><br/><br/>
               <CardText>{text2}</CardText><br/><br/>
               <CardText>{text3}</CardText><br/><br/>
               <CardText>{text4}</CardText><br/><br/>
               <CardText>{text5}</CardText><br/><br/>
               <CardText>{text6}</CardText>
            </CardContent>

      </Card>
   </Layout>
   )
}

export default AttorneyProfile

// TODO: PROFILE IMAGE

const text1 = "Attorney Mark N. Kerkhoff formed The Law Office of Mark N. Kerkhoff, PLLC in June of 2010."
const text2 = "Since the firm's inception, he has been honored by Business North Carolina Magazine as a member of the 'Legal Elite' in 'Employment' and 'Young Guns' as well as recognized in the Super Lawyers Rising Stars Edition, an honor and selection conferred upon less than 2.5% of attorneys in the entire State of North Carolina.  He also maintains a Martindale-Hubbell Rating of AV Preeminent Peer Review Rated."
const text3 = "Prior to forming his boutique employment law firm, Mr. Kerkhoff limited his practice to employment law litigation with a larger plaintiff's employment law litigation firm.  He also spent two summers in the Labor & Employment Practice Group at one of the largest defense litigation firms in the nation, where he gained significant experience on the defense side of employment law litigation matters.  Additionally, Mr. Kerkhoff gained invaluable experience prior to his graduation from law school, magna cum laude, as a law school clerk to two different federal judges in the Western District of North Carolina."
const text4 = "Mr. Kerkhoff draws upon his diverse work experience in the Midwest to truly relate to each business owner and client.  For example, Mr. Kerkhoff not only worked in retail management but also as a line worker in a Ford supplier’s automotive parts sorting factory; as a semi-pro baseball player and member of the Indiana Outlaws all time homeruns list; as a meat cutter in a small town butcher shop on Indiana's Ohio River; as a lumberyard associate in rural Northeast Missouri; and as a shop technician in a steel tower manufacturing plant in Southern Indiana."
const text5 = "In his free time, Mr. Kerkhoff enjoys competitive shooting, fishing, building and mechanics, and trains Brazilian Jiu-jitsu as a purple belt under the Royce Gracie team Fight to Win."
const text6 = "Mr. Kerkhoff is a licensed member of the Missouri, North Carolina, and South Carolina Bars."
