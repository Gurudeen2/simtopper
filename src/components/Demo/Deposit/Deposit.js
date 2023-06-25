import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./Deposit.module.css";

const Deposit = () => {
  return (
    <Container>
      <Row
        style={{
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
      >
        <Col>
          <h3>Deposit</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body style={{ textAlign: "justify" }}>
              <Card.Title>
                <i className="">icon</i> USDT
              </Card.Title>
              <Card.Text>
                <div className={classes["padding-div"]}>
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Generate Address
                  </a>
                  <p className={classes["padding-p"]}>
                    * Click on the button to generate your address where you can
                    send USDT to the platform.
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body style={{ textAlign: "justify" }}>
              <Card.Title>
                <i className="">icon</i> NGN
              </Card.Title>
              <Card.Text>
                <div className={classes["padding-div"]}>
                  <a
                    href="/"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Make Payment
                  </a>
                  <p className={classes["padding-p"]}>
                    * Click on the button to generate your address where you can
                    send NGN to the platform.
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "4rem",
          paddingBottom: "2rem",
        }}
        id="withdraw"
      >
        <Col>
          <h3>Withdrawal</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title>
                <p>You can withdraw the amount you want from your balance</p>
              </Card.Title>

              <Card.Text>
                <div
                  className="alert alert-warning"
                  role="alert"
                  style={{ fontSize: "14px" }}
                >
                  Please confirm that you are sending your funds to USDT token
                  from <strong>Ethereum network enabled wallet</strong>. USDT
                  sent to non-compatible addresses may be non-retrievable by the
                  recipient.
                </div>
                <Form>
                  <Row className="mb-3">
                    <Col sm="4">
                      <Form.Group controlId="amount">
                        <Form.Label column sm="4" className="text-left">
                          Amount
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control
                            type="text"
                            name="amount"
                            placeholder="0"
                            // ref={register}
                          />
                        </Col>
                      </Form.Group>
                    </Col>

                    <Col sm="8">
                      <Form.Group controlId="walletaddress">
                        <Form.Label column sm="4" className="text-left">
                          Wallet Address
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control
                            type="text"
                            name="walletaddress"
                            // ref={register}
                            placeholder="0x9AE533846bDae9BD18c937681D4Fb76791aE3A72"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    {/* <Col>
                      <a href="/" className="btn btn-primary">
                        Send
                      </a>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ textAlign: "right", width: "100%" }}>
                        <Button size="sm">Send</Button>
                      </div>
                    </Col>
                  </Row>
                  <div
                    style={{
                      display: "block",
                      marginTop: "10px",
                      marginBottom: "10px",
                      color: "#737373",
                      textAlign: "right",
                      fontSize: "10px",
                    }}
                  >
                    <p>
                      * The minimum withdrawal is 50 USDT
                      <br />
                      * For withdrawals in USDT, we apply a fee of 3 USDT
                      <br />
                      * You can only make one withdrawal request at a time
                      <br />* The withdrawal process can take up to 72 hours
                    </p>
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Deposit;
