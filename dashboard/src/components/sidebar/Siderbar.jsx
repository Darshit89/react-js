import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Siderbar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to="/" className="link">
              <li className="sidebarlistitem ">
                <LineStyle />
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <Link to="/users" className="link">
              <li className="sidebarlistitem">
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarlistitem">
                <Storefront />
                Product
              </li>
            </Link>
            <li className="sidebarlistitem">
              <AttachMoney />
              Transaction
            </li>
            <li className="sidebarlistitem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notification</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarlistitem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarlistitem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
