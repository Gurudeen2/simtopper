import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
// import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Account />
      </Sidebar>
    </>
  );
};

export default Dashboard;
