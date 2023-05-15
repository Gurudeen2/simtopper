import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import { Controller } from "react-hook-form";

const BuyAirtime = () => {
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
              <Controller
                name="branch_grade"
                as={Select}
                options={["GLO", "MTN", "AIRTEL"]}
                // control={control}
                getOptionValue={(option) => option.key}
                getOptionLabel={(option) => option.key}
                placeholder="related grade ..."
                rules={{ required: "Grade is required!" }}
                isInvalid={errors.branch_grade}
                disabled={mode === "view" || mode === "delete"}
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter Grade!
              </Form.Control.Feedback>
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
              <Form.Control type="text" name="airtimeamount" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default BuyAirtime;
