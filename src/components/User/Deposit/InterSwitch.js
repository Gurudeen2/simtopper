import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const InterSwitch = () => {
  const [custEmail, setCustEmail_] = useState("akeemtolanifatai@gmail.com");
  const { amount } = useParams();
  console.log("location", amount);

  function checkout() {
    // 1c4lMGHfWlNSdjRTCcDluAvB8oCaxTob8lzibA/+P+o6xJEfndaUw+QnAnYpi8M/
    var merchantCode = "MX169494";
    var payItemId = "Default_Payable_MX169494";

    var transRef = randomReference();
    var paymentRequest = {
      merchant_code: merchantCode,
      pay_item_id: payItemId,
      txn_ref: transRef,
      pay_item_name: "Fund SimTopper Account",
      cust_email: custEmail,
      amount: amount,
      cust_id: "akeem",
      currency: "566",
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
      "1c4lMGHfWlNSdjRTCcDluAvB8oCaxTob8lzibA/+P+o6xJEfndaUw+QnAnYpi8M/";
    // "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
        <Button onClick={() => checkout()}>Proceed Payment</Button>
      </Col>
    </Form>
  );
};
export default InterSwitch;
