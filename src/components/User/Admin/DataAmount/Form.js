import React, { useRef } from "react";
import { Col, Form, Row, Button, Container, Modal } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../../BaseUrl";
import { createDataAmount } from "../../../../apiUrl";

function FormDataAmount(props) {
  const methods = useForm();

  const amount = useRef();

  const onSubmitHandler = () => {
    const data = {
      amount: amount.current.value,
    };

    axios
      .post(baseUrl + createDataAmount, data)
      .then((res) => {
        if (res.status === 201) {
          alert("Data Amount Added");
        }
        props.fetchData();
      })
      .catch((err) => {
        alert(err.message);
      });
    props.onHide();
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="example-modal-sizes-title-lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Data Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      placeholder="Enter Amount eg 500MB, 1GB etc "
                      ref={amount}
                    />
                  </Form.Group>
                </Col>

                <Col
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button variant="primary" type="submit">
                    Add
                  </Button>
                </Col>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormDataAmount;
