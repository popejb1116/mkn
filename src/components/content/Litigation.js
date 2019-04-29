import React, { Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/home_litigation.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'


const Litigation = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={image} />                  
               <Card.Content>
                  <Heading size={3}>
                  Litigation
                  </Heading>
                  <br/>
                  
                  <TextInfoContext.Consumer>{
                     context => (
                        <Fragment>
                           <Heading subtitle renderAs="p">{context.state.litigation_paragraphs[0]}</Heading>
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

export default Litigation