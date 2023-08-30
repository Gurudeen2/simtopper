import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";
import { DataPriceURL, getDataPrice } from "../../../../apiUrl";
import classes from "./DataAmount.module.css";

const DataAmount = () => {
  const [data, setData_] = useState([]);

  const [show, setShow_] = useState(false);

  const handleClose = () => setShow_(false);
  const handleShow = () => setShow_(true);
  // Create table headers consisting of 4 columns.
  const header = [
    {
      prop: "id",
      title: "ID",
      isFilterable: true,
    },
    {
      prop: "amount",
      title: "Amount",
      isFilterable: true,
    },

    {
      prop: "button",

      cell: (row) => (
        <div>
          <Button
            variant="outline-primary"
            size="sm"
            className={classes["del-btn"]}
            onClick={() => {
              axios
                .delete(baseUrl + DataPriceURL + row.id)
                .then((res) => {
                  if (res.status === 204) {
                    alert(`${row.network} Record with ID ${row.id} is Deleted`);
                    fetchData();
                  }
                })
                .catch((err) => alert(err));
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
      .get(baseUrl + getDataPrice)
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
            <h3>Data Amount</h3>
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
              Add Data Amount
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <TableComponent body={data} header={header} />
          </Col>
        </Row>
      </Container>
      <FormNetwork
        show={show}
        onHide={handleClose}
        fetchData={() => fetchData()}
      />
    </>
  );
};
export default DataAmount;
