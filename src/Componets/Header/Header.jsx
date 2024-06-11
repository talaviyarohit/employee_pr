import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto ">
            <Link to='/' className='p-4 bg-dark'>Home</Link>
            <Link to='/adddata' className='p-4 bg-dark'>AddData</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header
