import React, { Fragment } from 'react'
import styled from 'styled-components'

const Panel = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
   width: 100%;
   min-height: 600px;
   background-color: orange;
   color: teal;

   ul{
      text-align: center;
   }
`

const BrowserComparison = () => {
   return (
      <Fragment>
         <strong>I'm a STRONG string.</strong>
         <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
         </ul>
      </Fragment>
   )
}

export default BrowserComparison
