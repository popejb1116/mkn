import React from 'react'
import { Card, Heading} from 'react-bulma-components/full'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'
import contractImage from '../../images/contracts.jpg'
import { CardWrapper } from '../../theme/StyledWrappers'

const Contracts = () => {
   return (
      <ThemeProvider theme={theme}>
         <CardWrapper>            
            <Card>
               <Card.Image src={contractImage} />                  
               <Card.Content>
                  <Heading size={3}>
                     Employment Contracts
                  </Heading>
                  <br/>
                  <Heading subtitle renderAs="p">
                  My firm frequently advises small to mid-size businesses on contractual arrangements and works closely with management to prepare highly customized employment agreements.  These contracts often include complex compensation arrangements, detailed performance expectations, and other unique terms and conditions with one goal in mind: to memorialize the business owner's goals and expectations, minimize risk, and maximize an employee's potential to accomplish employer expectations through the proper employment framework. 
                  </Heading>
               </Card.Content>
            </Card>            
         </CardWrapper>
      </ThemeProvider>
   )
}

export default Contracts