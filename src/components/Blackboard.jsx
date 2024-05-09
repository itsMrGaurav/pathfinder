import React, { useState, useEffect } from "react";
import "./whiteboard.css";
import Grid from "./Grid";
// import Directions from "./Directions";

const GRIDAREA = 700,
  NUM_WIDTH = 12,
  NUM_HEIGHT = 30;

const WhiteBoard = () => {
  const [gridSize, setGridSize] = useState({ row: 10, col: 10 });
  const [cellStyles, setCellStyles] = useState({});
  const grid = [];
  for (let i = 0; i < gridSize.row; i++) {
    let values = [];
    for (let j = 0; j < gridSize.col; j++) {
      values.push(Math.floor(Math.random() * 10));
    }
    grid.push(values);
  }

  useEffect(() => {
    setCellStyles({
      padding: `${Math.floor(
        (GRIDAREA / gridSize.col - NUM_HEIGHT - 2) / 2
      )}px ${Math.floor((GRIDAREA / gridSize.row - NUM_WIDTH - 2) / 2)}px `,
    });
  }, [gridSize]);

  return (
    <>
      <div>
        <Grid grid={grid} gridSize={gridSize} cellStyles={cellStyles} />
        {/* <Directions
          pathMap={["-1-1", "-10", "-11", "01", "11", "10", "1-1", "0-1"]}
        /> */}
      </div>
    </>
  );
};

export default WhiteBoard;
