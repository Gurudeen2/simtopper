import React from "react";
import { Card, Container, Row, ListGroup, Col } from "react-bootstrap";
import img from "../../../assets/images/photo-1624411024074-18a756682b50.jfif";

const PriceTag = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img src={img} />
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item><Col></Col>></ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
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
