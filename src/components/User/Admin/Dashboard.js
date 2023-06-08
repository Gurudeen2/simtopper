import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import Breadcrum from "../../UI/Breadcrumb/Breadcrumb";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Breadcrum separator="|" pageName="Get url from router" />
        <Routes>
          {/* <Account /> */}
          <Route path="/airtime" Component={BuyAirtime} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Dashboard;
