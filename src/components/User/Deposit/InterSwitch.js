import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Route, Routes, useParams } from "react-router-dom";

const InterSwitch = () => {
  const { amount } = useParams();
    console.log("location", amount);
    required parameter

    pay_item_id
    pay_item_name
    txt_ref
    amount
    currency
    cust_email
    site_redirect_url

  function checkout() {
    var merchantCode = "MX19329";
    var payItemId = "Default_Payable_MX19329";

    var transRef = randomReference();
    var paymentRequest = {
      merchant_code: merchantCode,
      pay_item_id: payItemId,
      txn_ref: transRef,
      amount: document.getElementsByName("amount")[0].value,
      cust_id: document.getElementsByName("cust_id")[0].value,
      currency: document.getElementsByName("currency")[0].value,
      site_redirect_url: window.location.origin,
      onComplete: paymentCallback,
      mode: "TEST",
    };
    window.webpayCheckout(paymentRequest);
  }

  //generate a random transaction ref
  function randomReference() {
    var length = 10;
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  //callback function that gets triggered on payment success or failure
  function paymentCallback(response) {
    if (response != null) {
      alert(response.desc);
    }
  }
  return (
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
        <Button>Proceed Payment</Button>
      </Col>
    </Form>
  );
};
export default InterSwitch;
