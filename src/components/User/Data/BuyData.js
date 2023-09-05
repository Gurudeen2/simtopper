import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { baseUrl } from "../../../BaseUrl";
import { getNetwork, getDataPrice } from "../../../apiUrl";
import axios from "axios";

const BuyData = () => {
  const [bonus, setBonus] = useState();
  const [networkData, setNetworkData_] = useState([]);
  const [dataPrice, setDataPrice_] = useState([]);

  const DataOptions = [
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
    { value: "200MB - 14Days", key: "1", amount: "50" },
  ];

  const networkHandler = (e) => {
    const handler = e.target.value;
    if (handler === "GLO" || handler === "MTN") {
      setBonus(handler);
      return;
    }
  };

  const Network = () => {
    axios
      .get(baseUrl + getNetwork)
      .then((res) => setNetworkData_(res.data))
      .catch((err) => alert(err.message));
  };

  const DataPrice = () => {
    axios
      .get(baseUrl + getDataPrice)
      .then((res) => setDataPrice_(res.data))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    Network();
    DataPrice()
  }, []);

  console.log("data price", dataPrice)

  return (
    <Container style={{ paddingTop: "1.5rem" }}>
      <Row style={{ width: "70%" }}>
        <h4>Buy Databundle </h4>

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
                {networkData.map((option) => (
                  <option key={option.providerID} value={option.providerName}>
                    {option.providerName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          amount : "3" duration : "30 Days" id : "2-3" network : 2 price : "230"
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>DataBundle Plan</Form.Label>
              <Form.Select onChange={networkHandler}>
                {dataPrice.map((option) => (
                  <option key={option.key} value={option.value}>
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
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" name="amount" readOnly />
            </Form.Group>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button variant="primary" type="submit">
              Buy Now
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default BuyData;
