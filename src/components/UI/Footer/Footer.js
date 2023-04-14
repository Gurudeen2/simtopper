import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>SIMTOPPER</h3>
          <span>
            We offer instant recharge of Data and cable subscriptions, results
            checker pin , airtime and electricity token generation
          </span>
        </Col>
        <Col>
          <p>
            <b>Useful Links</b>
          </p>
          <ul>
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
        <Col>
          <p>
            <b>Contact Information</b>
          </p>
          <p>Bussiness Address: Tunga Minna Niger state.</p>
          <p>Email: abdullahiibrahimkabir@gmail.com Phone: 2348108606335</p>
        </Col>
      </Row>

      <Row>
        <p>
          Developed By: <a href="fb.com/fakeem3">DevTolani</a>
        </p>
        <p>
          <i>icons to the right</i>
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
