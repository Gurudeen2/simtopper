import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./Home.module.css";

const Homepage = () => {
  return (
    <Container fluid className={classes["home-body"]}>
      <Row className={classes["home-content"]}>
        <Col style={{ color: "white" }}>
          <h1>Welcome To SIMTOPPER!</h1>
          <p>
            A technology platform that offers solutions to digital needs at best
            possible price without compromising quality.
          </p>

          <div>
            <Button>REGISTER</Button>
            <Button>REGISTER</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
