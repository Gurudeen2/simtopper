import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import classes from "./Register.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../BaseUrl";
import ModalClass from "../UI/Modal/Modal";

function Register() {
  const methods = useForm();

  const [visible, setVisible] = useState("password");
  const [req, setReq] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();

  const conpass = useRef();
  const pass = useRef();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const phonenumber = useRef();

  const passwordVisible = () => {
    setVisible("text");
    if (visible === "text") {
      setVisible("password");
    }
  };

  const passMatch = async () => {
    const data = {
      firstname: fname.current.value,
      lastname: lname.current.value,
      email: email.current.value,
      password: pass.current.value,
      phoneno: phonenumber.current.value,
    };
    if (conpass.current.value !== pass.current.value) {
      setReq(true);
    } else {
      await axios
        .post(baseUrl + "createuser/", data)
        .then((res) => {
          if (res.statusText === "OK") {
            // route to login commponent
          }
        })
        .catch((err) => {
          setModalShow(true);
          setDescription(err);
        });
      setReq(false);
    }
  };

  const onSubmitHandler = () => {
    passMatch();
  };
  return (
    <div>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />
      <div className={classes["page-header"]}></div>
      <Container className={classes["reg-container"]}>
        <Row>
          <h2>Register</h2>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  ref={fname}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                  ref={lname}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  required
                  ref={phonenumber}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" ref={email} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control
                    type={visible}
                    name="password"
                    required
                    ref={pass}
                  />
                  <InputGroup.Text>
                    <i onClick={passwordVisible}>Eye</i>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control
                    type={visible}
                    name="con_pass"
                    required={req}
                    ref={conpass}
                  />
                  <InputGroup.Text>
                    <i onClick={passwordVisible}>Eye</i>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              {req && (
                <i
                  style={{
                    color: "red",
                  }}
                >
                  Password Do not Match
                </i>
              )}
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
