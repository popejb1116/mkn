import React from 'react'
import { Container, Heading } from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import { ContainerWrapper } from '../../theme/StyledWrappers'

const Litigation = () => {
   return (
      <ThemeProvider theme={theme}>
         <ContainerWrapper>
            <Container>            
               <Heading size={3}>
                  Litigation
               </Heading>
               <br/>
               <Heading subtitle renderAs="p">
                  My firm is committed to excellence and professionalism in the thoughtful, diligent, and aggressive litigation of employment law matters in federal and state courts.  As a solo practitioner, I frequently defend small to medium sized LINK 
                  in employment law litigation and also aggressively prosecute a handful of highly meritorious LINK 
                  each year.  I strive to objectively analyze my clients' challenges from both sides of the issue without bias or puffery.  I believe this gives me a very unique perspective in the world of employment law.  My firm is able to approach potential litigation from both sides of the issue, advise clients accordingly, and many times anticipate and thwart our opponents' approach either in litigation or before claims are ever filed.
               </Heading>             
            </Container>
         </ContainerWrapper>
      </ThemeProvider>
   )
}

export default Litigation