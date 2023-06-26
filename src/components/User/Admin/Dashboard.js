import React from "react";
import { Route, Routes } from "react-router-dom";
// import Sidebar from "../../UI/Sidebar/Sidebar";
import Sidebar from "../../UI/Sidebar/SideBarTest";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import Breadcrum from "../../UI/Breadcrumb/Breadcrumb";
import NetworkProvider from "./Network/Network";
import Opportunity from "../../Demo/Opportunities/Opportunity";
import SingleOpport from "../../Demo/Opportunities/Opportunity/SingleOpport";
import DemoDashboard from "../../Demo/Dashboard/Dashboard";
import Profile from "../../Demo/Profile/Profile";
import Deposit from "../../Demo/Deposit/Deposit";
import Transaction from "../../Demo/Transactions/Transactions";
import FactorAuth from "../../Demo/TwoFA/FactorAuth";
import SecondaryMarket from "../../Demo/Market/Market";
import NavHeader from "../../UI/Header/Header";
import Homepage from "../../Demo/Homepage/Homepage";

const Dashboard = () => {
  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar--> */}
      <Sidebar />
      {/* <!-- Page content wrapper--> */}
      <div style={{ width: "100%" }}>
        <NavHeader />
        <div
          className="container-fluid content-container"
          style={{ paddingLeft: "3rem" }}
        >
          <Routes>
            <Route path="/dashboard" Component={Account} />
            <Route path="/demo/opportunity" Component={Opportunity} />
            <Route path="/demo/dashboard" Component={DemoDashboard} />
            <Route path="/demo/profile" Component={Profile} />
            <Route path="/demo/deposit" Component={Deposit} />
            <Route path="/demo/transaction" Component={Transaction} />
            <Route path="/demo/twofactor" Component={FactorAuth} />
            <Route path="/demo/secondarymarket" Component={SecondaryMarket} />

            <Route
              path="/demo/opportunity/:appartmentName"
              Component={SingleOpport}
            />

            <Route path="/airtime" Component={BuyAirtime} />
            <Route path="/addnetwork" Component={NetworkProvider} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
