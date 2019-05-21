import styled from 'styled-components'

export const Layout = styled.div`
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`

export const Card = styled.div`
   background-color: ${props => props.theme.accent};
   max-width: 900px;
   margin: 2rem 0rem; 
   border: solid 3px;
   border-color: white;
   border-radius: 10px;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

export const BlurUpContainer = styled.div`
   position: relative;
   margin: 0 auto;
   padding-bottom: 28.222%;
   
   img{
      max-width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      -webkit-transition: opacity 0.4s ease-in-out;
      -moz-transition: opacity 0.4s ease-in-out;
      -o-transition: opacity 0.4s ease-in-out;
      transition: opacity 0.4s ease-in-out;
   }

`
export const PlaceholderImg = styled.img`
   opacity: ${props => props.opacity};
`

export const CardContent = styled.div`
   padding: 1rem 2rem;
`

export const CardTitle = styled.div`
   color: white;
   text-align: center;
   font-size: 2rem;
   font-weight: bold;
   margin: 2rem;
`

export const CardText = styled.p`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
`


export const InlineLink = styled.div`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
   &:hover{
      cursor: pointer;
   }
`

export const CardText2 = styled.p`
   color: whitesmoke;
   font-size: 1rem;
   display: inline;
`