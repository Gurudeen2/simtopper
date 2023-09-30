import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import InterSwitch from "./InterSwitch";
import Fund from "./Fund";

const Deposit = () => {
  const onSumbitHandler = () => {
    const {} = useNavigate()
    navigate.
    //value == to the address navigating to
    // get the value of the selected value i.e in sthe address
    //psuh the value to targeted url
  };
  return (
    <>
      {/* <h3>Fund Your Account </h3> */}
      <Container style={{ width: "80%" }}>
        <Form>
          <Col className="mt-4">
            <Form.Group className="mb-3">
              <Form.Label>Deposit Method</Form.Label>
              <Form.Select required>
                <option value="">Select Fund Method</option>
                <option value="">Card Deposit | Interswitch</option>
                <option value="">Bank Transfer | Online Transfer</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button>Proceed</Button>
          </Col>
        </Form>
      </Container>
      <Routes>
        <Route path="/payment/:amount" Component={InterSwitch} />
        <Route path="/fund" Component={Fund} />
      </Routes>
    </>
  );
};

export default Deposit;
