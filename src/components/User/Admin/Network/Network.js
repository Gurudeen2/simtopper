import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import ModalClass from "../../../UI/Modal/Modal";
import { baseUrl } from "../../../../BaseUrl";

const NetworkProvider = () => {
  const methods = useForm();

  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();
  return (
    <>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />

      <Container>
        <Row style={{ width: "60%" }}>
          <h4
            style={{
              paddingBottom: "1rem",
            }}
          >
            Add Network{" "}
          </h4>

          <Form //onSubmit={methods.handleSubmit(submitHanlder)}
          >
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Provide ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provide ID"
                  name="provideID"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Network Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Network Name"
                  name="networkName"
                />
                {/* <Form.Select
                   onChange={networkHandler}
                >
                  <option value="---select---">---select---</option> */}
                {/* 
                  {options.map((option) => (
                    <option value={option.id} key={option.id}>
                      {option.value}
                    </option>
                  ))} */}
                {/* </Form.Select> */}
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
    </>
  );
};
export default NetworkProvider;
