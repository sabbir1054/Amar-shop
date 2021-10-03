import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo2.png" width="60" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <NavLink to="/" className="text-white me-2 text-decoration-none">
                Home
              </NavLink>
              <NavLink to="/order" className="text-white me-3 text-decoration-none">
                Order Review
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
