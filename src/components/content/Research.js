import React from 'react'
import { Layout, Card, CardContent, CardTitle, CardText } from './_ContentStyledComponents'

const Research = () => {
   return (
      <Layout>
         <Card>
            <CardContent>
               <CardTitle>Special Research Projects</CardTitle>
               <CardText>{text1}</CardText><br/><br/>
               <CardText>{text2}</CardText>
            </CardContent>
         </Card>
      </Layout>
   )
}

export default Research

const text1 = "Modern small to mid-size business employers need reliable answers to intricate, highly complex legal compliance questions.  My firm provides legal research opinions on a unique and wide variety of legal issues facing business and non-profit firm clients.  Various businesses have retained my firm to conduct highly complex and intricate special research projects. Recently, for example, these projects have included: the compilation of ownership computations, research, and ultimate legal opinion as to the applicability of the Patient Protection and Affordable Care Act ('PPACA') to multiple joint or common employers; the nationwide status of case law interpreting and applying constitutional protections to visitors on public educational property; and the implications of organizations' alternative pay arrangements to individuals subject to social security income (SSI) earnings limitation thresholds."
const text2 = "My firm strives to deliver professional excellence in all aspects of special research projects and seeks to significantly reduce organizational clients' investment and overall cost in these matters."
