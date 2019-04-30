import React,{ Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/contracts.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'

const Contracts = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={image} />                  
               <Card.Content>
                  <Heading size={3}>
                     Employment Contracts
                  </Heading>
                  

                  <TextInfoContext.Consumer>{
                     context => (
                        <Fragment>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[0]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[1]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[2]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[3]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[4]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[5]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[6]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.contracts_paragraphs[7]}</Heading>
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

export default Contracts