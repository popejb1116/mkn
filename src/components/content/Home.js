import React, { Fragment } from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import image from '../../images/home_litigation.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'
import { TextInfoContext } from '../../context/TextInfoContext'



const Home = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={image} />                  
               <Card.Content>
                  <Heading size={3}>
                     Employment Law Solutions
                  </Heading>
                  <br/>

                  <TextInfoContext.Consumer>{
                     context => (
                        <Fragment>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[0]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[1]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[2]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[3]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[4]}</Heading>
                           <Heading subtitle renderAs="p">{context.state.home_paragraphs[5]}</Heading>
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

export default Home


