import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const UserTestimonies = () => {
  return (
    <Container>
      <h2>Users Testimonials</h2>
      <p>Checokut these feedbacks from some of our satisfied customers</p>

      {/* slide should be here */}
      <Row>
        <Col>image here</Col>
        <Col>
          <p>
            Content
            <br />
            <b>Name</b>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default UserTestimonies;
