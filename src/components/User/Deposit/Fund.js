import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import InterSwitch from "./InterSwitch";

const Fund = () => {
  const [amount, setAmount] = useState("")
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
              onChange={(e)=>setAmount(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Link
            className="btn btn-sm btn-primary"
            to={`/account/deposit/payment/${amount}`}
          >
            Proceed Payment
          </Link>
        </Col>
      </Form>
    </>
  );
};

export default Fund;
