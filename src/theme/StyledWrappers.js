import styled from 'styled-components'

// WRAPS PRIMARY CARD USED IN ALL ROUTES CONTAINING CARD IMAGES
export const CardWrapper = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: center;
   padding: 2rem;

   .card{
      background-color: ${props => props.theme.accent};
      max-width: 900px;
      border: solid 3px;
      border-color: white;
      border-radius: 10px;
   }

   img{
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
   }

   .title{
      margin-bottom: 2.5rem;
      color: white;
      text-align: center;
   }

   .subtitle{
      color: white;
      font-size: 1rem;
   }
`