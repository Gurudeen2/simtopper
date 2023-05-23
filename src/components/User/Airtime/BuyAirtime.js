import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

const BuyAirtime = () => {
  const methods = useForm();

  const [bonus, setBonus] = useState();
  const [hidden, setHidden] = useState(true);
  const [airValue, setairValue] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const options = [
    { value: "MTN", id: "1" },
    { value: "GLO", id: "2" },
    { value: "AIRTEL", id: "3" },
    { value: "9MOBILE", id: "4" },
  ];

  const bonusOptions = [
    { value: "MTN", id: 1 },
    { value: "GLO", id: 2 },
    { value: "AIRTEL", id: 3 },
    { value: "9MOBILE", id: 4 },
  ];

  const networkHandler = (e) => {
    const handler = e.target;
    if (handler.value === "2" || handler.value === "1") {
      const filtered = options.find(
        (netwk) => netwk.id === handler.value
      ).value;

      setBonus(filtered);
      setHidden(false);
    } else {
      setHidden(true);
      setBonus(handler.value);
    }
  };

  const airtimeValueHandler = (e) => {
    setairValue(+e.target.value);
  };

  const MobileNumberHandler = (e) => {
    setMobileNumber(+e.target.value);
  };

  const submitHanlder = () => {
    const data = {
      network: bonus,
      amount: airValue,
      mobile_number: mobileNumber,
    };


    axios
      .post("http://127.0.0.1:8000/apiV1/airtime/", data)
      .then((res) => console.log("Res", res))
      .catch((err) => console.log("err", err));
    // fetch("http://127.0.0.1:8000/apiV1/airtime/", {
    //   method: "POST",
    //   body: JSON.stringify({
    // network: bonus,
    // amount: airValue,
    // mobile_number: mobileNumber,
    //   }),
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => console.log("res", res));

    console.log("submited");
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
                  <option value={option.id} key={option.id}>
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
                  <option value={option.id} key={option.id}>
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
