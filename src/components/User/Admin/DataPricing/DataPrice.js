import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";

const DataPrice = () => {
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
      prop: "networkName",
      title: "Network Name",
      isFilterable: true,
    },
    {
      title: "Amount",
      prop: "dataAmount",
      isFilterable: true,
    },
    {
      title: "Duration",
      prop: "dataDuration",
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
              axios.delete(baseUrl + "deletenetwork/" + row.providerID);
              alert(`${row.providerID}'s score is ${row.providerName}`);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // const fetchData = useCallback(async () => {
  //   await axios
  //     .get(baseUrl + "getnetwork/")
  //     .then((res) => {
  //       let datas = res.data.map((dt) => dt.fields);
  //       setData_(datas);
  //       console.log("res", datas);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <>
      <Container style={{ paddingTop: "1.5rem" }}>
        <Row style={{ paddingBottom: "1rem" }}>
          <Col>
            <h3>Data Price</h3>
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
              Add Data Price
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
export default DataPrice;
