import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import classes from "./Login.module.css";

function Register() {
  return (
    <div>
      <div className={classes["page-header"]}>Home/Login</div>
      <Container className={classes["login-container"]}>
        <Row>
          <Col sm="12">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <br />
            <p>
              By clicking register, you agree to our{" "}
              <a href="/">Terms of Use</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
