import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar bg='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo2.png" width="60" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/order" className="text-white">
                Order Review
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
