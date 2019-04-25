import React, { Component } from 'react'
import { Navbar } from 'react-bulma-components/full'
import { Link } from 'react-router-dom'
//import logo from '../../images/logo-styled.png'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../theme/Theme'

const NavWrapper = styled.div`
   
   .navbar{
      background-color: ${props => props.theme.primary};
      padding: 0 3rem;
   }
   .navbar-burger{
      color: white;
      span{
         height: 2px;
      }
   }
   .navbar-menu{
      background-color: ${props => props.theme.primary};
      justify-content: center;
   }
   .navbar-start{
      margin: 0;
   }
   .navbar-item:hover{
      background-color: ${props => props.theme.accent}
   }
   #rr-link{
      color: white;
      font-weight: bold;
   }
`

class BulmaNavbar extends Component {

   state = {
      open: false
   }
   
   handleBurger = () => {
      this.setState( prevState => {
         return {open: !prevState.open}
      })
   }

   render(){
      return (
         <ThemeProvider theme={theme}>
            <NavWrapper>

               <Navbar active={this.state.open}>
                  <Navbar.Brand>
                     {/* <Navbar.Item renderAs="div" href="#">
                        <img
                        src={logo}
                        alt="MKN"
                        />
                     </Navbar.Item> */}
                     <Navbar.Burger onClick={this.handleBurger} />
                  </Navbar.Brand>
         
                  <Navbar.Menu >
                     
                     <Navbar.Container>
                        <Navbar.Item>
                           <Link to="/" id="rr-link">Home</Link>
                        </Navbar.Item>                  
                        <Navbar.Item >
                           <Link to="/litigation" id="rr-link">Litigation</Link>
                        </Navbar.Item>
                        <Navbar.Item>
                           <Link to="/contracts" id="rr-link">Contracts</Link>
                        </Navbar.Item>                  
                        <Navbar.Item >
                           <Link to="/hrconsulting" id="rr-link">HR Consulting</Link>
                        </Navbar.Item>
                        <Navbar.Item >
                           <Link to="/research" id="rr-link">Research</Link>
                        </Navbar.Item>
                        <Navbar.Item >
                           <Link to="/attorneyprofile" id="rr-link">Attorney Profile</Link>
                        </Navbar.Item>
                     </Navbar.Container>
         
                  </Navbar.Menu>
               </Navbar>
            </NavWrapper>
         </ThemeProvider>
      )
   }
}

export default BulmaNavbar