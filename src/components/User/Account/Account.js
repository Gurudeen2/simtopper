import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import classes from "./Account.module.css";

function Account() {
  return (
    <>
      <Container fluid className={classes["account-container"]}>
        <Row>
          <Col md="12" sm="12" lg="12" xs="12">
            <Card className="shadow-sm p-3 mb-5 bg-white rounded border-0">
              <h3>
                Akeem Fatai
                <a href="/" className={classes.achor}>
                  Logout
                </a>
              </h3>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <span style={{background:"green"}}>Wallet Balance</span>
            <h2>N1000</h2>
            <a href="/">Deposit</a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
