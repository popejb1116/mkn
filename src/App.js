import React from 'react'
import './App.css'
import Banner from './components/common/Banner'
import { BrowserRouter, Route } from 'react-router-dom'
import BulmaNavbar from './components/navigation/BulmaNavbar'
import Home from './components/content/Home'
import Litigation from './components/content/Litigation'
import Contracts from './components/content/Contracts'
import HRConsulting from './components/content/HRConsulting'
import Research from './components/content/Research'
import AttorneyProfile from './components/content/AttorneyProfile'
import ContactUs from './components/content/ContactUs'
import BusinessForm from './components/content/BusinessForm'
import EmployeeForm from './components/content/EmployeeForm'
import Footer from './components/common/Footer'
import styled from 'styled-components'

const AppWrapper = styled.div`   
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   min-height: ${props => props.dynamicHeight+'px'};

   .shifter{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: flex-end;
   }
`

function App() {

   // GET THE DEVICE DIMENSIONS IN PX AND PASS TO APP WRAPPER TO ENSURE FOOTER ALWAYS RENDERS AT VERY BOTTOM OF SCREEN
   const dynamicHeight = window.innerHeight

   return (
      <AppWrapper dynamicHeight={dynamicHeight} >

         <Banner />
         
         <BrowserRouter>
            <BulmaNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/litigation" component={Litigation} />
            <Route path="/contracts" component={Contracts} />
            <Route path="/hrconsulting" component={HRConsulting} />
            <Route path="/research" component={Research} />
            <Route path="/attorneyprofile" component={AttorneyProfile} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/contact-us/business" component={BusinessForm} />
            <Route exact path="/contact-us/employee" component={EmployeeForm} />
         </BrowserRouter>

         <div className="shifter">
            <Footer />  
         </div>
          
      </AppWrapper>
      
   )
}

export default App