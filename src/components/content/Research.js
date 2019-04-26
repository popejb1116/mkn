import React from 'react'
import { Container, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import { ResearchWrapper } from '../../theme/StyledWrappers'

const Research = () => {
   return (
      <ThemeProvider theme={theme}>
         <ResearchWrapper>
         <Container>        
            <Heading size={3}>
               Default
            </Heading>
            <Heading subtitle renderAs="p" >
               Container
            </Heading>        
         </Container>
         </ResearchWrapper>
      </ThemeProvider>
   )
}

export default Research