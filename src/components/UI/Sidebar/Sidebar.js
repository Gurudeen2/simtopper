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
          <a href="/">Home</a>
        </p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Data Management</a>
          </li>
          <li>
            <a href="/">Airtime Records</a>
          </li>
          <li>
            <a href="/">Fund Management</a>
          </li>

          <li>
            <a href="/">Airtime Management</a>
          </li>
        </ul>
      </div>
      <div id="main">{props.children}</div>
    </div>
  );
};

export default Sidebar;
