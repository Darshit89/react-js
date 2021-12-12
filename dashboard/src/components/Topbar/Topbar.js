import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <div className="logo">Admin</div>
        </div>
        <div className="topright">
          <div className="topbarIcons">
            <NotificationsNone />
            <span className="topiconbage">3</span>
          </div>
          <div className="topbarIcons">
            <Language />
            <span className="topiconbage">3</span>
          </div>
          <div className="topbarIcons">
            <Settings />
          </div>
          <img
            src="https://i1.sndcdn.com/artworks-000356246487-buu3py-t500x500.jpg"
            alt="avatar"
            className="topavtar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
