import React from "react";
import Chart from "../../components/chart/Chart";
import Fretured from "../../components/fetured/Fretured";
import "./home.css";
import { data } from "../../components/chart/chartdata";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetlg/WidgetLg";

function Home() {
  return (
    <div className="home">
      <Fretured></Fretured>
      <Chart data={data}></Chart>
      <div className="homewidget">
        <WidgetSm></WidgetSm>

        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}

export default Home;
