import React,{ Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/ee-law.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'

const AttorneyProfile = () => {
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
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[0]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[1]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[2]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[3]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[4]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[5]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.attorney_profile_paragraphs[6]}</Heading>
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

export default AttorneyProfile

// TODO: PROFILE IMAGE