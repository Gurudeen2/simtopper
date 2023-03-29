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
            <Col>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180"/> */}
                <i class="bi bi-telephone-inbound-fill"></i>
                <Card.Body>
                  <Card.Text>
                    <i class="bi bi-telephone-inbound-fill"></i>
                    Buy
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
