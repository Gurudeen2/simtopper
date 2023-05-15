import React from "react";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        {/* <Account /> */}
        <BuyAirtime />
      </Sidebar>
    </>
  );
};

export default Dashboard;
