import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";
import { deleteNetwork, getNetwork } from "../../../../apiUrl";

const NetworkProvider = () => {
  const [data, setData_] = useState([]);

  const [show, setShow_] = useState(false);

  const handleClose = () => setShow_(false);
  const handleShow = () => setShow_(true);

  const deleteData = (row) => {
    
    axios
      .delete(baseUrl + deleteNetwork + row.providerID)
      .then((res) => {
        alert(`${row.providerName} Deleted!!`);
        fetchData();
      })
      .catch((err) => alert(err));
  };
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
            onClick={() => deleteData(row)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const fetchData = useCallback(async () => {
    await axios
      .get(baseUrl + getNetwork)
      .then((res) => {
        setData_(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Container style={{ paddingTop: "1.5rem" }}>
        <Row style={{ paddingBottom: "1rem" }}>
          <Col>
            <h3>Network</h3>
          </Col>
          <Col style={{ textAlign: "right" }}>
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
            <TableComponent body={data} header={header} />
          </Col>
        </Row>
      </Container>
      <FormNetwork show={show} onHide={handleClose} />
    </>
  );
};
export default NetworkProvider;
