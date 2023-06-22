import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Opportunities.module.css";
import image from "../../../assets/images/D1.jpg";

const Opportunity = () => {
  const data = [
    {
      title: "Krabi Beach Apartment",
      price: 20000,
      type: "Apartment",
      roi: 45.63,
      img1: "../../../assets/images/D1.jpg",
      img2: "../../../assets/images/D2.jpg",
      img3: "../../../assets/images/D6.jpg",
    },
    {
      title: "Land at Lekki",
      price: 20000,
      type: "Apartment",
      roi: 45.63,
      img1: "../../../assets/images/D1.jpg",
      img2: "../../../assets/images/D2.jpg",
      img3: "../../../assets/images/D6.jpg",
    },
  ];
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  return (
    <Container style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
      <div className={classes.heading}>
        <h5>Opportunities</h5>
      </div>
      <Row>
        {data.map((dt) => {
          return (
            <Col
              sm="4"
              xs="4"
              md="4"
              lg="4"
              xl="4"
              style={{ marginBottom: "1.5rem" }}
            >
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {dt.title}
                  </Card.Title>
                  <Card.Text>
                    <div className={classes.spacing}>
                      <strong>Price in NGN</strong>: <span>{dt.price}</span>
                    </div>
                    <div className={classes.spacing}>
                      <strong>Property Type</strong>: <span>{dt.type}</span>
                    </div>
                    <div className={classes.spacing}>
                      <strong>Projected ROI Transfer</strong>{" "}
                      <i class="bi bi-question-circle-fill"></i> :{" "}
                      <span>{dt.roi}%</span>
                    </div>
                  </Card.Text>
                  <div className={classes["button-container"]}>
                    <Button className={classes.button} variant="primary">
                      More Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Opportunity;
