import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import Breadcrum from "../../UI/Breadcrumb/Breadcrumb";
import NetworkProvider from "./Network/Network";
import Opportunity from "../../Demo/Opportunities/Opportunity";
import SingleOpport from "../../Demo/Opportunities/Opportunity/SingleOpport";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        {/* <Breadcrum separator="|" pageName="Get url from router" /> */}
        <Routes>
          <Route path="/dashboard" Component={Account} />
          <Route path="/demo" Component={Opportunity} />
          <Route path="/demo/:appartmentName" Component={SingleOpport} />

          <Route path="/airtime" Component={BuyAirtime} />
          <Route path="/addnetwork" Component={NetworkProvider} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Dashboard;
