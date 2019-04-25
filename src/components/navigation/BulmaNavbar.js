import React from 'react'
import { Navbar } from 'react-bulma-components/full'
import { Link } from 'react-router-dom'

const BulmaNavbar = () => {
   return (
      <ul>
         <li>
            <Link to="/home">Home</Link>
         </li>
         <li>
            <Link to="/litigation">Litigation</Link>
         </li>
         <li>
            <Link to="/contracts">Contracts</Link>
         </li>
         <li>
            <Link to="/hrconsulting">HR Consulting</Link>
         </li>
         <li>
            <Link to="/research">Research</Link>
         </li>
      </ul>
   )
}

export default BulmaNavbar