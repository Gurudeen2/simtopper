import React from "react";
import classes from "./Sidebar.module.css";
import avatar from "../../../assets/images/photo-1624411024074-18a756682b50.jfif";

const Sidebar = (props) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.sidebar}`}>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <img src={avatar} alt="avatar" width="50rem" />
        </div>
        <hr />

        <span>Account</span>
        <p>
          <a href="/">Dashboard</a>
        </p>
        <p>
          <a href="/">Edit Profile</a>
        </p>
        <p>
          <a href="/">Change Password</a>
        </p>
        <hr />

        <span>Data Management</span>
        <p>
          <a href="/">Buy Data</a>
        </p>
        <p>
          <a href="/">Recent Data Transaction</a>
        </p>
        <p>
          <a href="/">User Data Transaction</a>
        </p>
        <hr />

        <span>Airtime Management</span>
        <p>
          <a href="/">Buy Airtime</a>
        </p>
        <p>
          <a href="/">Recent Airtime Transaction</a>
        </p>
        <p>
          <a href="/">User Airtime Transaction</a>
        </p>
        <hr />
        <p>
          <a href="/">Cable Subscription</a>
        </p>
        <hr />
        <p>
          <a href="/">Electricity Payment</a>
        </p>
        <hr />
        <p>
          <a href="/">Fund Account</a>
        </p>
      </div>
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Sidebar;
