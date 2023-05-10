import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Account() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" sm="12" lg="12" xs="12">
            <h3>Name</h3>{" "}
            <span>
              (<a href="/">Log Out</a>)
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            Wallet Balance
            <h2>N1000</h2>
            <a href="/">Deposit</a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
