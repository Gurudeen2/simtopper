import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import Breadcrum from "../../UI/Breadcrumb/Breadcrumb";
import NetworkProvider from "./Network/Network";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Breadcrum separator="|" pageName="Get url from router" />
        <Routes>
          <Route path="/dashboard" Component={Account} />

          <Route path="/airtime" Component={BuyAirtime} />
          <Route path="/addnetwork" Component={NetworkProvider} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Dashboard;
