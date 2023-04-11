import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import img from "../../../assets/images/photo-1624411024074-18a756682b50.jfif";

const PriceTag = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Header>
                <Card.Img src={img} />
              </Card.Header>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default PriceTag;
