import React, { useState, useEffect } from "react";
import Directions from "./Directions";

const Grid = ({ grid, gridSize, cellStyles }) => {
  const [showBlackHoles, setShowBlackholes] = useState(true);
  const [showSun, setShowSun] = useState(true);
  const [showAllPaths, setShowAllPaths] = useState(false);
  const [showLongestPath, setShowLongestPath] = useState(false);
  const [clickedCell, setClickedCell] = useState("");

  const formatPaths = (paths, r, c) => {
    return paths.map((item) => {
      return `${item[0] - r}${item[1] - c}`;
    });
  };

  const generatePathMap = (rows, cols, r, c) => {
    const pathMap = [];
    rows.forEach((v) => {
      cols.forEach((k) => {
        const row = v - r,
          col = k - c;
        if ((row || col) && grid[r][c] < grid[v][k]) {
          pathMap.push([v, k]);
        }
      });
    });
    return pathMap;
  };

  const isBlackHole = (rows, cols, r, c) => {
    let ret = "blackhole";
    rows.forEach((v) => {
      cols.forEach((k) => {
        if (grid[r][c] < grid[v][k]) {
          ret = "";
        }
      });
    });
    return ret;
  };

  const isSun = (rows, cols, r, c) => {
    let ret = "sun";
    rows.forEach((v) => {
      cols.forEach((k) => {
        if (grid[r][c] > grid[v][k]) {
          ret = "";
        }
      });
    });
    return ret;
  };

  const cellNeighbours = (r, c, func) => {
    if (r > 0 && c > 0 && r < gridSize.row - 1 && c < gridSize.col - 1) {
      return func([r - 1, r, r + 1], [c - 1, c, c + 1], r, c);
    } else if (r === 0 && c === 0) {
      return func([r, r + 1], [c, c + 1], r, c);
    } else if (r === 0 && c === gridSize.col - 1) {
      return func([r, r + 1], [c - 1, c], r, c);
    } else if (r === gridSize.row - 1 && c === 0) {
      return func([r - 1, r], [c, c + 1], r, c);
    } else if (r === gridSize.row - 1 && c === gridSize.col - 1) {
      return func([r - 1, r], [c - 1, c], r, c);
    } else if (r === 0 && c > 0 && c < gridSize.col - 1) {
      return func([r, r + 1], [c - 1, c, c + 1], r, c);
    } else if (r === gridSize.row - 1 && c > 0 && c < gridSize.col - 1) {
      return func([r - 1, r], [c - 1, c, c + 1], r, c);
    } else if (c === 0 && r > 0 && r < gridSize.row - 1) {
      return func([r - 1, r, r + 1], [c, c + 1], r, c);
    } else if (c === gridSize.col - 1 && r > 0 && r < gridSize.row - 1) {
      return func([r - 1, r, r + 1], [c - 1, c], r, c);
    }
  };

  const individualPathFinder = (r, c, allPaths) => {
    const validPaths =
      cellNeighbours(r, c, generatePathMap).filter(
        (item) => !allPaths.some((e) => String(e) === String(item))
      ) ?? [];
    allPaths = [...allPaths, ...validPaths];
    validPaths.forEach(
      (item) => (allPaths = individualPathFinder(item[0], item[1], allPaths))
    );
    return allPaths;
  };

  const [individualActivePathMap, setIndividualActivePathMap] = useState([]);
  const handleCellClick = (r, c) => {
    const allPaths = individualPathFinder(r, c, []);
    setIndividualActivePathMap(allPaths);
  };

  const searchItem = (r, c) => {
    return individualActivePathMap?.some(
      (item) => String(item) === String([r, c])
    );
  };

  return (
    <div>
      <div className="whiteboard">
        {grid.map((row, r) => {
          return row.map((col, c) => {
            const id = `${r}-${c}`;
            return (
              <span
                id={id}
                className={`cell ${
                  showBlackHoles ? cellNeighbours(r, c, isBlackHole) : ""
                } ${showSun ? cellNeighbours(r, c, isSun) : ""} ${
                  individualActivePathMap?.length && searchItem(r, c)
                    ? "active"
                    : ""
                } ${clickedCell === id ? "clicked" : ""}`}
                style={{
                  gridArea: `${r + 1}/${c + 1}/${r + 1}/${c + 2}`,
                  margin: "auto",
                  padding: cellStyles?.padding,
                }}
                onClick={() => {
                  handleCellClick(r, c);
                  setClickedCell(`${r}-${c}`);
                }}
              >
                {col}
                {showAllPaths && (
                  <Directions
                    pathMap={formatPaths(
                      cellNeighbours(r, c, generatePathMap),
                      r,
                      c
                    )}
                  />
                )}
              </span>
            );
          });
        })}
      </div>
      {/* <div className="d-flex justify-content-evenly mt-4">
        <div className="form-check checkboxes">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={showBlackHoles}
            onClick={(e) => {
              setShowBlackholes(e.target.checked);
            }}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Show Blackholes
          </label>
        </div>
        <div className="form-check checkboxes">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={showSun}
            onClick={(e) => setShowSun(e.target.checked)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Show Suns
          </label>
        </div>
        <div className="form-check checkboxes">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={showAllPaths}
            onClick={(e) => setShowAllPaths(e.target.checked)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Show All Paths
          </label>
        </div>
        <div className="form-check checkboxes">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={showLongestPath}
            onClick={(e) => setShowLongestPath(e.target.checked)}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Longest Path
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default Grid;
