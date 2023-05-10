import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Container>
          <Row>
            <Col md="12">Head Title</Col>
          </Row>
        </Container>
      </Sidebar>
    </>
  );
};

export default Dashboard;
