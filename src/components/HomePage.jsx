import React, { useEffect, useState } from "react";
import WhiteBoard from "./Blackboard";
import BackgroundUniverse from "../assets/background-universe.jpg";
import "./homepage.css";
import DiceView from "./DiceView";

const HomePage = () => {
  return (
    <div
      className="px-4 py-4 cs_homepage"
      style={{ backgroundImage: `url(${BackgroundUniverse})` }}
    >
      <div className="row">
        <div className="col-4">
          <DiceView />
        </div>
        <div className="col-8">
          <WhiteBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
