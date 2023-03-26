import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import classes from "./Header.module.css";

const NavHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="logo" width="30%" className={classes.img} />
          Navbar
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
