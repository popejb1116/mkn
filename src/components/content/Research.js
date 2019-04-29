import React, { Fragment } from 'react'
import { Container, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import { ResearchWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'

const Research = () => {
   return (
      <ThemeProvider theme={theme}>
         <ResearchWrapper>
         <Container>        
            <Heading size={3}>
               Research
            </Heading>
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

         </Container>
         </ResearchWrapper>
      </ThemeProvider>
   )
}

export default Research