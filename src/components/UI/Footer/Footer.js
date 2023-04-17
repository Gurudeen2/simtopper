import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={classes.footer}>
      <Row>
        <Col sm="4" lg="4" md="4" xs="4">
          <h3>SIMTOPPER</h3>
          <span>
            We offer instant recharge of Data and cable subscriptions, results
            checker pin , airtime and electricity token generation
          </span>
        </Col>
        <Col sm="4" lg="4" md="4" xs="4" className={classes.usefullinks}>
          <ul>
            <p>
              <b>Useful Links</b>
            </p>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <li>
                <a href="/">Services</a>
              </li>
              <a href="/">Login</a>
              <li>
                <a href="/">Register</a>
              </li>
            </li>
          </ul>
        </Col>
        <Col sm="4" lg="4" md="4" xs="4">
          <p>
            <b>Contact Information</b>
          </p>
          <p>Bussiness Address: Tunga Minna Niger state.</p>
          <p>Email: abdullahiibrahimkabir@gmail.com </p>
          <p>Phone: 2348108606335</p>
        </Col>
      </Row>

      <Row className={classes["footer-bottom"]}>
        <Col>
          Developed By: <a href="fb.com/fakeem3">DevTolani</a>
        </Col>
        <Col>
          <i
            style={{
              float: "right",
            }}
          >
            icons to the right
          </i>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;