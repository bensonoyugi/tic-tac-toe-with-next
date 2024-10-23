"use client";
import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[currentMove];
  const [xIsNext, setXIsNext] = useState(true);

  // Check winner
  const winner = calculateWinner();

  function handleClick(i) {
    // Check if game is already won or if square is already played
    if (winner || currentSquares[i]) {
      return;
    }

    // Calculate next squares
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // set up next player
    setXIsNext(!xIsNext);

    // update current squares
    setCurrentMove((m) => m + 1);
    // update history
    setHistory([...history, nextSquares]);
  }

  function calculateWinner() {
    // Define winning line combos
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check if any of the lines have an identical value
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[b] === currentSquares[c]
      ) {
        return currentSquares[a];
      }
    }

    return null;
  }

  return (
    <>
      <Board squares={currentSquares} onSquareClick={handleClick} />
    </>
  );
}

export default Game;
