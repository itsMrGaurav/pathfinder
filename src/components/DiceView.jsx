import React, { useEffect, useState } from "react";
import Dice from "./Dice";

const DiceView = () => {
  const [diceRollValue, setDiceRollValue] = useState(-1);
  useEffect(() => {
    console.log(diceRollValue);
  }, [diceRollValue]);

  return (
    <div>
      <h1>Suns & Blackholes</h1>
      <div className="card cs_card mt-5">
        <div className="card-body">
          <h5 className="card-title">Roll The Dice?</h5>
          <p className="card-text">
            <Dice setDiceRollValue={setDiceRollValue} />
            {/* <ul style={{ textAlign: "left" }}>
                  <li>Each Player starts by rolling the dice.</li>
                  <li>Getting "1" shall be marked as start of the game.</li>
                  <li>
                    Suns are marked with yellow boxes. When land in sun, you can
                    choose to advance your coin towards goal following ascending
                    path i.e., you can move towards boxes with values higher
                    than the one you're in at present.
                  </li>
                  <li>
                    Contradictory to Suns are Blackholes. If you land in one of
                    those, you will need a "1" to start moving ahead.
                  </li>
                  <li>
                    The player to reach the earth first shall be the winner.
                  </li>
                </ul> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiceView;
