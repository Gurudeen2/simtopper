import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container fluid className={classes["header-section"]}>
      <Row className={classes["row-section"]}>
        <Col>
          <h2>The Best Platform For VTU Services</h2>
          <small className="d-sm-none">
            We offer instant recharge of Airtime, Databundle, CableTV (DStv,
            GOtv &amp; Startimes), Electricity Bill Payment and more
          </small>
          <Button className={classes.button}>Button</Button>
        </Col>
        <Col>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i
                        className={`bi bi-telephone-inbound-fill ${classes.icon}`}
                      ></i>
                      <p>Buy Airtime</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-wifi ${classes.icon}`}></i>
                      <p>Buy Data</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-lightbulb ${classes.icon}`}></i>
                      <p>Buy Electricity</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <a href="/" className={classes.link}>
                      <i className={`bi bi-wifi ${classes.icon}`}></i>
                      <p>Cable TV</p>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
