import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import classes from "./SidebarTest.module.css";

const Sidebar = () => {
  return (
    <div
      className={`border-end sidenav ${classes.sidebar}`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading border-bottom ">
        <Link to="/">
          {/* <img
              alt="Alt content"
              src={require("./../assets/images/logo.png")}
            /> */}
        </Link>
      </div>
      <PerfectScrollbar className="sidebar-items">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/dashboard">
              <i className="fa fa-dashboard"></i> Dashboard
            </Link>
          </li>

          <li className="border-top my-3"></li>

          <span style={{ color: "#fff", fontSize: "14px" }}>Funding</span>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/blank-page">
              <i className="fa fa-file-o"></i> Deposit
            </Link>
          </li>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/blank-page">
              <i className="fa fa-file-o"></i> Withdrawal
            </Link>
          </li>
          <li className="border-top my-3"></li>
          <span style={{ color: "#fff", fontSize: "14px" }}>Properties</span>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/opportunity">
              <i className="fa fa-text-width" aria-hidden="true"></i>My
              Properties
            </Link>
          </li>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/opportunity">
              <i className="fa fa-text-width" aria-hidden="true"></i>
              Opportunities
            </Link>
          </li>
          <li className="border-top my-3"></li>
          <span style={{ color: "#fff", fontSize: "14px" }}>Account</span>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/profile">
              <i className="fa fa-text-width" aria-hidden="true"></i>My Profile
            </Link>
          </li>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/transaction">
              <i className="fa fa-text-width" aria-hidden="true"></i>
              Transactions
            </Link>
          </li>
          <li className="mb-1">
            <Link tag="a" className={classes.link} to="/demo/twofactor">
              <i className="fa fa-text-width" aria-hidden="true"></i>
              2FA
            </Link>
          </li>
        </ul>
      </PerfectScrollbar>
    </div>
  );
};

export default Sidebar;
