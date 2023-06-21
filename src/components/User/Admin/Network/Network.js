import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";

const NetworkProvider = () => {
  const [data, setData_] = useState([]);

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
              axios.delete(baseUrl + "deletenetwork/", row.providerID);
              alert(`${row.providerID}'s score is ${row.providerName}`);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const fetchData = useCallback(async () => {
    await axios
      .get(baseUrl + "getnetwork/")
      .then((res) => {
        setData_(res.data.map((dt) => dt.fields));
        console.log("res", res);
      })
      .catch((err) => {});
  }, [data]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
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
            <TableComponent body={data} header={header} />
          </Col>
        </Row>
      </Container>
      <FormNetwork show={show} onHide={handleClose} />
    </>
  );
};
export default NetworkProvider;
