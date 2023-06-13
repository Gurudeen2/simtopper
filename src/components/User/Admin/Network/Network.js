import React, { useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import ModalClass from "../../../UI/Modal/Modal";
import FormNetwork from "./Form";

const NetworkProvider = () => {
  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();

  const [show, setShow_] = useState(false);

  const handleClose = () => setShow_(false);
  const handleShow = () => setShow_(true);

  return (
    <>
      <ModalClass
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description}
      />
      <Container>
        <Row>
          <Col md="10" sm="10" xs="8">
            <h3>Network</h3>
          </Col>
          <Col md="2" sm="2" xs="4">
            <Button
              onClick={handleShow}
              style={{
                border: "none",
                height: "4rem",
                borderRadius: "0px",
              }}
            >
              Add Network
            </Button>
          </Col>
        </Row>

        <Row></Row>
      </Container>
      <FormNetwork show={show} onHide={handleClose} />
    </>
  );
};
export default NetworkProvider;
