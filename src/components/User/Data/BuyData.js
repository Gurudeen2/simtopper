import React, { useCallback, useEffect, useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { baseUrl } from "../../../BaseUrl";
import {
  getNetwork,
  getDataPrice,
  createDataAmount as getDataAmount,
} from "../../../apiUrl";
import axios from "axios";

const BuyData = () => {
  const [networkData, setNetworkData_] = useState([]);
  const [dataPrice, setDataPrice_] = useState([]);
  const [dataAmount, setDataAmount_] = useState([]);
  const [newData_, setNewData_] = useState([]);

  const [networkValue, setNetworkValue_] = useState([]);
  const [amountValue_, setAmountValue_] = useState("");

  const networkHandler = (e) => {
    setNetworkValue_(newData_.filter((nd_) => nd_.network === +e.target.value));
  };

  const amountValueHandler = (e) => {
    setAmountValue_("");
    if (e.target.value) {
      setAmountValue_(
        networkValue.find((nd_) => nd_.amount === e.target.value).price
      );
    }
  };

  const newDataPrice = useCallback(() => {
    const newData = dataPrice.map((d) => {
      return {
        id: d.id,
        network: d.network,
        price: d.price,
        duration: d.duration,
        amount:
          dataAmount.length > 0
            ? dataAmount.find((da) => da.id === +d.amount).amount
            : d.amount,
      };
    });
    setNewData_(newData);
  }, [dataAmount.length, dataPrice.length]);
  const DataAmount = () => {
    axios
      .get(baseUrl + getDataAmount)
      .then((res) => setDataAmount_(res.data))
      .catch((err) => alert(err.message));
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
      .then((res) => {
        setDataPrice_(res.data);
      })
      .catch((err) => alert(err.message));
  };
  //function start here

  useEffect(() => {
    Network();
    DataPrice();
    DataAmount();
    newDataPrice();
  }, [newData_.length, newDataPrice]);
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
              <Form.Select onChange={networkHandler} required>
                <option value="">Select Network</option>
                {networkData.map((option) => (
                  <option key={option.providerID} value={option.providerID}>
                    {option.providerName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>DataBundle Plan</Form.Label>
              <Form.Select required onChange={amountValueHandler}>
                <option value="">Select Data Plan</option>
                {networkValue.map((option) => (
                  <option key={option.id} value={option.amount}>
                    {`${option.amount} - ${option.duration}`}
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
              <Form.Control
                type="text"
                name="amount"
                value={amountValue_}
                readOnly
              />
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
