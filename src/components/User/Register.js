import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import classes from "./Register.module.css";

function Register() {
  const [visible, setVisible] = useState("password");
  const passwordVisible = () => {
    setVisible("text");
    if (visible === "text") {
      setVisible("password");
    }
  };
  return (
    <div>
      <div className={classes["page-header"]}></div>
      <Container className={classes["reg-container"]}>
        <Row>
          <h2>Register</h2>
          <Form>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control type={visible} name="password" required />
                  <InputGroup.Text>
                    <i onClick={passwordVisible}>Eye</i>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <div className={classes["align-button"]}>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
          <br />
          <p>
            By clicking register, you agree to our <a href="/">Terms of Use</a>
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
