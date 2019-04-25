import React from 'react'
import './App.css'
//import Banner from './components/common/Banner'
import { BrowserRouter, Route } from 'react-router-dom'
import BulmaNavbar from './components/navigation/BulmaNavbar'
import Home from './components/content/Home'
import Litigation from './components/content/Litigation'
import Contracts from './components/content/Contracts'
import HRConsulting from './components/content/HRConsulting'
import Research from './components/content/Research'

function App() {
   return (

      // <Banner />
      <BrowserRouter>

         <BulmaNavbar />

         <Route path="/home" component={Home} />
         <Route path="/litigation" component={Litigation} />
         <Route path="/contracts" component={Contracts} />
         <Route path="/hrconsulting" component={HRConsulting} />
         <Route path="/research" component={Research} />

      </BrowserRouter>
      
   )
}

export default App