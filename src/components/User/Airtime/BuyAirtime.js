import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const BuyAirtime = () => {
  const methods = useForm();

  const [bonus, setBonus] = useState();
  const [hidden, setHidden] = useState(true);
  const [airValue, setairValue] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const options = [
    { value: "MTN", key: "1" },
    { value: "GLO", key: "2" },
    { value: "AIRTEL", key: "3" },
    { value: "9MOBILE", key: "4" },
  ];

  const bonusOptions = [
    { value: "MTN", key: 1 },
    { value: "GLO", key: 2 },
    { value: "AIRTEL", key: 3 },
    { value: "9MOBILE", key: 4 },
  ];

  const networkHandler = (e) => {
    const handler = e.target;
    console.log("network", handler);
    if (handler.value === "2" || handler.value === "1") {
      const convertObj = Object.entries(options);
      const filtered = convertObj.filter(([value, key]) =>
        console.log("ysufd", key)
      );
      console.log("dilter", typeof handler.value);
      setBonus(filtered);

      setHidden(false);
      return;
    }
  };

  const airtimeValueHandler = (e) => {
    setairValue(+e.target.value);
    console.log("airvalue", airValue);
  };

  const MobileNumberHandler = (e) => {
    setMobileNumber(+e.target.value);
    console.log("airvalue", mobileNumber);
  };

  const submitHanlder = () => {
    fetch("http://127.0.0.1:8000/apiV1/airtime/", {
      method: "POST",
      body: JSON.stringify({
        network: bonus,
        amount: airValue,
        mobile_number: mobileNumber,
      }),
      header: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log("res", res));
  };

  return (
    <Container>
      <Row style={{ width: "60%" }}>
        <h4>Buy Airtime </h4>

        <Form onSubmit={methods.handleSubmit(submitHanlder)}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Wallet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wallet"
                defaultValue="parse balance from db"
                readOnly
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Network</Form.Label>
              <Form.Select onChange={networkHandler}>
                {options.map((option) => (
                  <option value={option.key} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Airtime Value(50-50,000)</Form.Label>
              <Form.Control
                type="text"
                name="airtimevalue"
                onChange={airtimeValueHandler}
                required
              />
            </Form.Group>
          </Col>

          <Col hidden={hidden}>
            <Form.Group className="mb-3">
              <Form.Label>{bonus} Bonus</Form.Label>
              <Form.Select>
                {bonusOptions.map((option) => (
                  <option value={option.value} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                onChange={MobileNumberHandler}
                required
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Airtime Amount</Form.Label>
              <Form.Control type="text" name="airtimeamount" readOnly />
            </Form.Group>
          </Col>

          <Col>
            <Button variant="primary" type="submit">
              Buy Now
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default BuyAirtime;
