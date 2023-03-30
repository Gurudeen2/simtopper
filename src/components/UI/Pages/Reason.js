import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Reason.module.css";

const Reason = () => {
  return (
    <Container fluid className={classes.reason}>
      <Row>
        <Col>
          <h2>Why Choose Us?</h2>
          <p>
            We offer instant recharge of Airtime, Databundle, CableTV (DStv,
                      GOtv & Startimes), Electricity Bill Payment and more...
                      <br/>We're Fast <br/>Automated Services checl100% Secured checlWe're Reliable
            checlAlways Online checl24/7 Customer Support
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Reason;
