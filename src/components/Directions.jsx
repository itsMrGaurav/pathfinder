import React from "react";
import "./whiteboard.css";
import Arrow from "../assets/arrow.svg";

const Directions = ({ pathMap }) => {
  return (
    <div className="vectors-container">
      <img
        src={Arrow}
        alt=""
        className="vector nw"
        style={{ visibility: pathMap?.includes("-1-1") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector n"
        style={{ visibility: pathMap?.includes("-10") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector ne"
        style={{ visibility: pathMap?.includes("-11") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector e"
        style={{ visibility: pathMap?.includes("01") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector se"
        style={{ visibility: pathMap?.includes("11") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector s"
        style={{ visibility: pathMap?.includes("10") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector sw"
        style={{ visibility: pathMap?.includes("1-1") ? "visible" : "hidden" }}
      />
      <img
        src={Arrow}
        alt=""
        className="vector w"
        style={{ visibility: pathMap?.includes("0-1") ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default Directions;
