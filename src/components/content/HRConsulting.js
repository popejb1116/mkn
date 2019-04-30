import React,{ Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/hr-consulting.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'

const HRConsulting = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={image} />                  
               <Card.Content>
                  <Heading size={3}>
                     HR Consulting
                  </Heading>

                  <TextInfoContext.Consumer>{
                     context => (
                        <Fragment>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[0]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[1]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[2]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[3]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[4]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[5]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.hr_consulting_paragraphs[6]}</Heading>
                        </Fragment>
                     )
                  }                     
                  </TextInfoContext.Consumer>

               </Card.Content>
            </Card>            
         </CardWrapper>
      </ThemeProvider>
   )
}

export default HRConsulting