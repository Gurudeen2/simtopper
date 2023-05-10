import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

function Account() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" sm="12" lg="12" xs="12">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/286x180"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
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
