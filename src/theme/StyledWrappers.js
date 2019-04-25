import styled from 'styled-components'

export const TestWrapper = styled.div`
   .hero{
      background-color: ${props => props.theme.primary};
   }
   .title, .subtitle{
      color: white;
   }
`