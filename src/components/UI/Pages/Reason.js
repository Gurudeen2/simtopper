import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Reason.module.css";
import image from "../../../../assets/images/"


const Reason = () => {
  return (
    <Container fluid className={classes.reason}>
      <Row>
        <Col className={classes["justify-content"]}>
          <h2>Why Choose Us?</h2>
          <p>
            We offer instant recharge of Airtime, Databundle, CableTV (DStv,
            GOtv & Startimes), Electricity Bill Payment and more...
            <br />
            We're Fast <br />
            Automated Services <br />
            100% Secured <br />
            We're Reliable
            <br />
            Always Online <br />
            24/7 Customer Support
          </p>
        </Col>
        <Col><img src="../../" alt="choose us"/></Col>
      </Row>
    </Container>
  );
};

export default Reason;
