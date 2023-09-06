import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { baseUrl } from "../../../BaseUrl";
import {
  getNetwork,
  getDataPrice,
  createDataAmount as getDataAmount,
} from "../../../apiUrl";
import axios from "axios";

const BuyData = () => {
  const [bonus, setBonus] = useState();
  const [networkData, setNetworkData_] = useState([]);
  const [dataPrice, setDataPrice_] = useState([]);
  const [dataAmount, setDataAmount_] = useState([]);

  const networkValue = useRef();

  const networkHandler = (e) => {
    const handler = e.target.value;
    console.log("Network Value", networkValue.current.value);

    console.log("handler", handler);
    if (handler === "GLO" || handler === "MTN") {
      setBonus(handler);
      return;
    }
  };

  const DataAmount = useCallback(() => {
    axios
      .get(baseUrl + getDataAmount)
      .then((res) => setDataAmount_(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const Network = useCallback(() => {
    axios
      .get(baseUrl + getNetwork)
      .then((res) => setNetworkData_(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const DataPrice = useCallback(() => {
    axios
      .get(baseUrl + getDataPrice)
      .then((res) => {
        newDataPrice(res.data);
        // setDataPrice_(res.data
        // res.data.map((dt) => {
        //   console.log("Check", dataAmount);
        //   setDataPrice_({
        //     amount:
        //       dataAmount.length > 0
        //         ? console.log(
        //             "inside",
        //             dataAmount.find((da) => da.id === +dt.amount)
        //           )
        //         : dt.amount,
        //     duration: dt.duration,
        //     id: dt.id,
        //     network: dt.network,
        //     price: dt.price,
        //   });
        //   return setDataPrice_;
        // });
        // );
      })
      .catch((err) => alert(err.message));
  }, []);
  //function start here
  const newDataPrice = (data) => {
    const newData = data.map((d) => {
      return {
        id: d.id,
        price: d.price,
        duration: d.duration,
        amount: d.amount,
      };
    });
    console.log("DA", newData);
  };

  console.log("dataPrice", dataPrice);
  newDataPrice();
  useEffect(() => {
    Network();
    DataPrice();
    DataAmount();
  }, [Network, DataPrice, DataAmount]);
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
              <Form.Select onChange={networkHandler} ref={networkValue}>
                <option>Select Network</option>
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
                {/* {dataPrice.map((option) => (
                  <option key={option.id} value={option.amount}>
                    {`${option.amount} - ${option.duration}`}
                  </option>
                ))} */}
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
