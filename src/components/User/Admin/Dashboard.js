import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import Breadcrum from "../../UI/Breadcrumb/Breadcrumb";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Breadcrum separator="|" pageName="Get url from router" />
        {/* <Account /> */}

        <BuyAirtime />
      </Sidebar>
    </>
  );
};

export default Dashboard;
