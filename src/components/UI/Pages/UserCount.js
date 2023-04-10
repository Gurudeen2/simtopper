import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const UserCount = () => {
    return (
      <Container>
        <Row>
          <Col>
            1000k
            <br />
            Register User
          </Col>
          <Col>
            1000k
            <br />
            Logged In Users
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
};

export default UserCount;
