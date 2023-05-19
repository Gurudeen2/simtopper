import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const BuyAirtime = () => {
  const [bonus, setBonus] = useState();
  const [hidden, setHidden] = useState(true);

  const options = [
    { value: "MTN", key: "1" },
    { value: "GLO", key: "2" },
    { value: "AIRTEL", key: "3" },
    { value: "9MOBILE", key: "4" },
  ];

  const bonusOptions = [
    { value: "MTN", key: "1" },
    { value: "GLO", key: "2" },
    { value: "AIRTEL", key: "3" },
    { value: "9MOBILE", key: "4" },
  ];

  const networkHandler = (e) => {
    const handler = e.target.value;
    if (handler === "GLO" || handler === "MTN") {
      setBonus(handler);
      setHidden(false);
      return;
    }
  };

  return (
    <Container>
      <Row style={{ width: "60%" }}>
        <h4>Buy Airtime </h4>

        <Form>
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
                  <option value={option.value} key={option.key}>
                    {option.value}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Airtime Value(50-50,000)</Form.Label>
              <Form.Control type="text" name="airtimevalue" required />
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
              <Form.Control type="text" name="number" required />
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
