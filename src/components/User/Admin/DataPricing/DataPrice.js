import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import FormNetwork from "./Form";
import TableComponent from "../../../DataTable/DataTable";
import axios from "axios";
import { baseUrl } from "../../../../BaseUrl";
import { getNetwork } from "../../../../apiUrl";

const DataPrice = () => {
  const [data, setData_] = useState([]);

  const [show, setShow_] = useState(false);
  const [getNetworkData, setGetNetworkData_] = useState([]);

  const handleClose = () => setShow_(false);
  const handleShow = () => setShow_(true);
  // Create table headers consisting of 4 columns.
  const header = [
    {
      prop: "",
      title: "",
    },
    {
      prop: "network",
      title: "Network Name",
      isFilterable: true,
    },
    {
      title: "Amount",
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

  const GetNetwork = () => {
    axios.get(baseUrl + getNetwork).then((res) => {
      setGetNetworkData_(res.data);
    });
  };

  const fetchData = useCallback(async () => {
    let transData = [];
    await axios
      .get(baseUrl + "getdataprice/")
      .then((res) => {
        res.data.map((dt, index) => {
          transData.push({
            amount: dt.amount,
            duration: dt.duration,
            network: 1,
            price: dt.price,
          });
        });
        console.log("newData", transData)
        setData_(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
    GetNetwork();
  }, [fetchData]);

  console.log("get network", data);
  // let datas = res.data.map((dt) => {
  //   if (getNetworkData.length > 0) {
  //     dt.network = getNetworkData.filter(
  //       (d) => d.providerID === dt.network
  //     )[0].providerName;
  //   }
  //   console.log(
  //     "log ",
  //     getNetworkData.filter((d) => d.providerID === dt.network)
  //   );

  //   return {
  //     ...dt,
  //   };
  // });
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
