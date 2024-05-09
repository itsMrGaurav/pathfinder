import React from "react";
import "./dice.css";

const Dice = ({ setDiceRollValue }) => {
  function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
      // die.dataset.roll = 1;
      setTimeout(() => {
        setDiceRollValue(die.dataset.roll);
      }, 1500);
    });
  }

  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="dice">
      <ol className="die-list even-roll" data-roll="1" id="die-1">
        <li className="die-item" onClick={rollDice} data-side="1">
          <span className="dot"></span>
        </li>
        <li className="die-item" onClick={rollDice} data-side="2">
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" onClick={rollDice} data-side="3">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" onClick={rollDice} data-side="4">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" onClick={rollDice} data-side="5">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" onClick={rollDice} data-side="6">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
      </ol>
      {/* <ol className="die-list odd-roll" data-roll="1" id="die-2">
    <li className="die-item" data-side="1">
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="2">
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="3">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="4">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="5">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="6">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
  </ol>
  <ol className="die-list odd-roll" data-roll="1" id="die-3">
    <li className="die-item" data-side="1">
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="2">
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="3">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="4">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="5">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
    <li className="die-item" data-side="6">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </li>
  </ol>  */}
    </div>
  );
};

export default Dice;
