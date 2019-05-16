import React from 'react'
import { TextInfoContext } from '../../context/TextInfoContext'
import { Layout, Card, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const Research = () => {
   return (
      <Layout>
         <Card>
            
            <CardContent>
               <CardTitle>Research</CardTitle>
               <TextInfoContext.Consumer>{
                  context => (
                     context.paragraphs.research.map( paragraph => <CardText>{ paragraph }</CardText> )
                  )
               }                     
               </TextInfoContext.Consumer>                  
            </CardContent>

      </Card>
   </Layout>
   )
}

export default Research