import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./fretured.css";

function Fretured() {
  return (
    <div className="fretured">
      <div className="fretureditem">
        <span className="freturetitle">Revenue</span>
        <div className="freturemoneycontainer">
          <span className="freturemoney">20455</span>
          <span className="freturemoneyrate">
            -1125
            <ArrowDownward className="negative" />
          </span>
        </div>
        <span className="freturesub">Comapred to last month </span>
      </div>
      <div className="fretureditem">
        <span className="freturetitle">Sales</span>
        <div className="freturemoneycontainer">
          <span className="freturemoney">20455</span>
          <span className="freturemoneyrate">
            +125
            <ArrowUpward className="positive" />
          </span>
        </div>
        <span className="freturesub">Comapred to last month </span>
      </div>
      <div className="fretureditem">
        <span className="freturetitle">Cost</span>
        <div className="freturemoneycontainer">
          <span className="freturemoney">20455</span>
          <span className="freturemoneyrate">
            -1125
            <ArrowDownward className="negative" />
          </span>
        </div>
        <span className="freturesub">Comapred to last month </span>
      </div>
    </div>
  );
}

export default Fretured;
