
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Form,FormControl,Container,Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Login from "./components/login";
import SignUp from "./components/signup";


function App() {
return (
	<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Familial Foresight</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">  
      <Nav.Link href="#about-us">About</Nav.Link>
    </Nav>
   {/* <Navbar.Brand href="#home" className="navbar-brand-center">Familial Foresight</Navbar.Brand> */}
     

    
    <Nav>
      <Nav.Link href="#history" >History</Nav.Link>
      <Nav.Link eventKey={2} href="#contact-us">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<div ><br></br><br></br>
  <h1 style={{color:"#ffffff" ,fontFamily: 'Carter One'}}>FULL STOP TO  FALLACIOUS  CURIOSITY</h1>
  <div style={{color:'white',padding:'200px'}}>
<Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button className="btn1" >Search</Button>
    </Form>
  </div>

</div>

	</>
);
};

export default App;