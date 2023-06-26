import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./About.module.css";

const HowItWorks = () => {
  return (
    <div className={classes["about-bg"]}>
      <Container>
        <Row>
          <Col style={{ padding: "4rem", color: "#fff" }}>
            <h4>
              Blockreal is proud to employ professionals with a successful track
              record in their respective fields.
            </h4>
            <p>Professionals bringing the new way of Real Estate investment</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div style={{ background: "#f8f8f8" }}>
        <Container
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h4>HOW IT WORKS</h4>
              </div>
              <p className={classes.justify}>
                Step 1: Create your account and deposit funds in Naira or USD by
                transferring to your bank account.
              </p>
              <p className={classes.justify}>
                Step 2: Choose from a range of investment opportunities and
                start growing your real estate portfolio with as little as NGN
                10,000.
              </p>
              <p className={classes.justify}>
                Step 3: Track your investments, transactions, and profits
                conveniently on your personalized dashboard.
              </p>
              <p className={classes.justify}>
                Step 4: Exit your investment through property sales, selling
                shares to other users, or selling participation on exchanges.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HowItWorks;
