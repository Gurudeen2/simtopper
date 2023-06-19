import React, { useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import ModalClass from "../../../UI/Modal/Modal";
import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";

const NetworkProvider = () => {
  const [modalShow, setModalShow] = useState(false);
  const [description, setDescription] = useState();
  const [data, setData_] = useState();

  const [show, setShow_] = useState(false);

  const handleClose = () => setShow_(false);
  const handleShow = () => setShow_(true);
  // Create table headers consisting of 4 columns.
  const header = [
    {
      prop: "",
      title: "",
    },
    {
      prop: "providerID",
      title: "ID",
      isFilterable: true,
    },
    {
      title: "Name",
      prop: "providerName",
      isFilterable: true,
    },
    {
      prop: "button",

      cell: (row) => (
        <div style={{ textAlign: "center", right: "30%" }}>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => {
              alert(`${row.providerID}'s score is ${row.providerName}`);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const fetchData = async () => {
    await axios
      .get(baseUrl + "getnetwork/")
      .then((res) => {
        setData_(res);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
// "[{"model": "networkprovider.networkprovider", "pk": 1, "fields": {"providerID": 1, "providerName": "MTN"}}]"

  const body = [];
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

        <Row>
          <Col>
            <TableComponent body={body} header={header} />
          </Col>
        </Row>
      </Container>
      <FormNetwork show={show} onHide={handleClose} />
    </>
  );
};
export default NetworkProvider;
