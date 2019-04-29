import React, { Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'

const Research = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Content>
                  <Heading size={3}>Research</Heading>
                  <br/>
                  
                  <TextInfoContext.Consumer>{
                     context => (
                        <Fragment>
                           <Heading subtitle renderAs="p">{context.state.research_paragraphs[0]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.research_paragraphs[1]}</Heading>
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

export default Research