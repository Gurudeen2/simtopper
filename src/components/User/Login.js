import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import classes from "./Login.module.css";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";

function Login() {
  const [isVisible, setIsVisible] = useState("password");
  const passwordVisible = () => {
    setIsVisible("text");
    if (isVisible === "text") {
      setIsVisible("password");
    }
  };
  return (
    <div>
      <div className={classes["page-header"]}></div>
      <Container className={classes["login-container"]}>
        <Row>
          <h2>Login</h2>
          <Form>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control type={isVisible} name="password" required />
                  <InputGroup.Text onClick={passwordVisible}>
                    {isVisible === "text" ? <EyeFill /> : <EyeSlashFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>
            </Col>
            <Col className={classes["button-align"]}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Form>
          <Col>
            <p>
              By clicking register, you agree to our
              <a href="/">Terms of Use</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
