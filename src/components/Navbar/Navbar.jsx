import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  let background="linear-gradient(90deg, rgba(0, 138, 241, 1) 0%, rgba(70, 70, 70, 1) 84%, rgba(0, 95, 255, 1) 100%)"
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" style={{background:background}} fixed="top">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" style={{color:'white'}}>SOBRE MI</Nav.Link>
            <Nav.Link href="#skills"style={{color:'white'}}>SKILLS</Nav.Link>
            <Nav.Link href="#portfolio"style={{color:'white'}}>PROYECTOS</Nav.Link>      
          </Nav>
          <Nav>
            <Nav.Link href="#contact"style={{color:'white'}}>CONTACTO</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;