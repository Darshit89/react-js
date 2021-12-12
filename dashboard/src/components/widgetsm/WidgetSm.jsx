import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">New Join Member</span>
      <NewUser></NewUser>
      <NewUser></NewUser>
      <NewUser></NewUser>
      <NewUser></NewUser>
      <NewUser></NewUser>
    </div>
  );
}

export default WidgetSm;

function NewUser() {
  return (
    <>
      <ul className="widgetsmlist">
        <li className="widgetsmitem">
          <img
            src="https://images.unsplash.com/photo-1528228377194-2faca82540e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60 "
            alt=""
            className="widgetsmimg"
          />
          <div className="widgetsmuser">
            <span className="widgetusername">ava ama</span>
            <span className="widgetusertitle">Computer Engineer</span>
          </div>
          <button type="button" className="widgetsmbtn">
            <Visibility></Visibility>
            Display
          </button>
        </li>
      </ul>
    </>
  );
}
