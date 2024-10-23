import React from "react";

function Moves({ moves, goToMove }) {
  return (
    <ol>
      {moves.map((squares, move) => (
        <li key={move}>
          <button className="border" onClick={() => goToMove(move)}>
            {moves.length > 1 &&
              move != moves.length - 1 &&
              (move === 0 ? "Restart game" : `Revert to move ${move}`)}
          </button>
        </li>
      ))}
    </ol>
  );
}

export default Moves;
