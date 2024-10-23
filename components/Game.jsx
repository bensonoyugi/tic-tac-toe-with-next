"use client";
import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHostory] = useState([Array(9).fill(null)]);

  return (
    <>
      <Board />
    </>
  );
}

export default Game;
