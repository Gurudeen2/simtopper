import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import classes from "./Header.module.css";

const NavHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src="" alt="logo" width="30%" className={classes.img} /> */}
          <h2>EsusuProp Trade</h2>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Logout</Nav.Link>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
