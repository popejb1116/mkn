import styled from 'styled-components'

export const BannerWrapper = styled.div`
   .hero{
      background-color: ${props => props.theme.primary};
   }
   .title, .subtitle{
      color: white;
      text-align: right;
   }
`