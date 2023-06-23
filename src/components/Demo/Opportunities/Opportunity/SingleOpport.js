import React, { useEffect, useState } from "react";
import {
  Carousel,
  Col,
  Container,
  Row,
  OverlayTrigger,
  Tooltip,
  Image,
  Card,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "../Opportunities.module.css";

const SingleOpport = () => {
  const { appartmentName } = useParams();
  const { dataContent, setDataContent_ } = useState();
  console.log("match singleOpport", appartmentName);
  const data = [
    {
      title: "Krabi Beach Apartment",
      price: 200000000,
      type: "Apartment",
      roi: 45.63,
      img1: "D1.jpg",
      img2: "D2.jpg",
      img3: "D6.jpg",
      img: [
        {
          img1: "D6.jpg",
          img2: "D6.jpg",
          img3: "D6.jpg",
        },
      ],
    },
    {
      title: "Land at Lekki",
      price: 340000000,
      type: "Apartment",
      roi: 25.31,
      img1: "D6.jpg",
      img2: "D6.jpg",
      img3: "D6.jpg",
      img: [
        {
          img1: "D6.jpg",
          img2: "D6.jpg",
          img3: "D6.jpg",
        },
      ],
    },
  ];

  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Holy Akeem!</strong> Check this info.
    </Tooltip>
  );

  // useEffect(() => {
  //   const contentData = data.find((dt) => dt.title === appartmentName);
  //   setDataContent_(contentData)
  //   console.log("Content", contentData);
  // }, [appartmentName, data]);

  return (
    <Container>
      <Row>
        <Col sm="8">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="/D1.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="/D2.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/D6.jpg" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm="4">
          <Card
            style={{
              width: "18rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
            }}
          >
            {/* <Card.Img src={dt.img1} as={Image} variant="top" fluid={true} /> */}
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>title</Card.Title>
              <Card.Text>
                <div className={classes.spacing}>
                  <strong>Price in NGN</strong>: <span>price</span>
                </div>
                <div className={classes.spacing}>
                  <strong>Total RPP</strong>: <span>price</span>
                </div>
                <div className={classes.spacing}>
                  <strong>Price Per RPP</strong>{" "}
                  <OverlayTrigger placement="top" overlay={tooltip}>
                    <i
                      bsStyle="default"
                      className="bi bi-question-circle-fill"
                    ></i>
                  </OverlayTrigger>
                  : <span>%</span>
                </div>
              </Card.Text>
              <div className={classes["button-container"]}>
                {/* <Link
                  className={`btn btn-primary ${classes.button}`}
                  to=""
                >
                  More Details
                </Link> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleOpport;
