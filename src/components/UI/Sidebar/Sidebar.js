import React from "react";
import classes from "./Sidebar.module.css";
import avatar from "../../../assets/images/photo-1624411024074-18a756682b50.jfif";

const Sidebar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div
          style={{
            padding: "1rem",
          }}
        >
          <img src={avatar} alt="avatar" width="50rem" />
        </div>
        <p>
          <a href="/">Dashboard</a>
        </p>

        <p>
          <a href="/">Profile</a>
        </p>
<span>Data Management</span>
        <p>
          <a href="/">Data Management</a>
        </p>
        <p>
          <a href="/">Airtime Management</a>
        </p>
        <p>
          <a href="/">Cable Subscription</a>
        </p>
        <p>
          <a href="/">Fund Account</a>
        </p>
      </div>
      <div id="main">{props.children}</div>
    </div>
  );
};

export default Sidebar;
