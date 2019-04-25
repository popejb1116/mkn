import styled from 'styled-components'

// WRAPS PRIMARY CONTAINER USED IN ALL ROUTES
export const ContainerWrapper = styled.div`
   background-color: ${props => props.theme.accent};

   .container{
      padding: 2.5rem;
   }

   .title, .subtitle{
      color: white;
   }
`