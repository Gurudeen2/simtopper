import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import classes from "./Login.module.css";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import axios from "axios";
import { baseUrl } from "../../BaseUrl";

function Login() {
  const methods = useForm();
  const username = useRef();
  const password = useRef();
  const [isVisible, setIsVisible] = useState("password");
  const passwordVisible = () => {
    setIsVisible("text");
    if (isVisible === "text") {
      setIsVisible("password");
    }
  };
  const onSubmitHandler = () => {
    const data = {
      username: username.current.value,
      password: password.current.value
    }
    axios
      .post(baseUrl + "loginuser/", data)
      .then((res) => {
        console.log("login", res);
      }).catch((err) => {
        console.log("err login", err.response.data)
      })

    console.log("ake", data)
     
  };

  return (
    <div>
      <div className={classes["page-header"]}></div>
      <Container className={classes["login-container"]}>
        <Row>
          <h2>Login</h2>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Emaail / Phone Number</Form.Label>
                <Form.Control
                  name="emailphoneno"
                  type="text"
                  placeholder="Email or Phone Number"
                  required
                  ref={username}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={isVisible}
                    name="password"
                    required
                    ref={password}
                  />
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
