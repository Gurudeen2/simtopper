import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import InterSwitch from "./InterSwitch";
import Fund from "./Fund";

const Deposit = () => {
  return (
    <>
      {/* <h3>Fund Your Account </h3> */}

      <Routes>
        <Route path="/payment/:amount" Component={InterSwitch} />
        <Route path="/fund" Component={Fund} />
      </Routes>
    </>
  );
};

export default Deposit;
