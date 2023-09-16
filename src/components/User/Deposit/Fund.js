import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import InterSwitch from "./InterSwitch";

const Fund = () => {
  return (
    <>
      <h3>Fund Your Account </h3>
      <Form>
        <Col>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Amount"
              name="amount"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Link
            className="btn btn-sm btn-primary"
            to="/account/deposit/payment/100"
          >
            Proceed Payment
          </Link>
        </Col>
      </Form>
    </>
  );
};

export default Fund;
