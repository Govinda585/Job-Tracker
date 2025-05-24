import React from "react";
import "./MainContentCard.css";
import Chart from "./Chart";
const MainContent = () => {
  return (
    <div>
      <div className="MainContent-Card">
        <section className="MainContent-Card-Left">
          <h1>Application Over time</h1>
          <Chart />
        </section>
        <section className="MainContent-Card-Right">
          <h1> Status Distrubution</h1>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
