import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";
import { DataPriceURL, getDataPrice, getNetwork } from "../../../../apiUrl";
import classes from "./Dataprice.module.css";

const DataPrice = () => {
  const [data, setData_] = useState([]);

  const [show, setShow_] = useState(false);
  const [getNetworkData, setGetNetworkData_] = useState([]);

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
      prop: "network",
      title: "Network Name",
      isFilterable: true,
    },
    {
      title: "Amount(GB)",
      prop: "amount",
      isFilterable: true,
    },
    {
      title: "Duration",
      prop: "duration",
      isFilterable: true,
    },
    {
      title: "Price in Naira",
      prop: "price",
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
                .catch((err) => alert(err.message));
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const GetNetwork = () => {
    axios.get(baseUrl + getNetwork).then((res) => {
      setGetNetworkData_(res.data);
    });
  };

  const fetchData = useCallback(async () => {
    await axios
      .get(baseUrl + getDataPrice)
      .then((res) => {
        setData_(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    fetchData();
    GetNetwork();
  }, [fetchData]);

  let transData = [];
  data.map((dt) => {
    if (getNetworkData.length > 0) {
      transData.push({
        id: dt.id,
        amount: dt.amount,
        duration: dt.duration,
        network: getNetworkData.find((d) => d.providerID === dt.network)
          .providerName,
        price: dt.price,
      });
    }
    return transData;
  });
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
            <TableComponent body={transData} header={header} />
          </Col>
        </Row>
      </Container>
      <FormNetwork
        show={show}
        onHide={handleClose}
        network={getNetworkData}
        fetchData={() => fetchData()}
      />
    </>
  );
};
export default DataPrice;
