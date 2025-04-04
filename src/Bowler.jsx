import { useState } from "react";

export default function Bowler({ bowlerName }) {
  const [ball, setBalls] = useState(0);
  const handleBall = () => {
    const newBall = ball + 1;
    if (newBall < 6) {
      setBalls(newBall);
    } else if (newBall % 6 === 0) {
      //ball = 0;
      const over = newBall / 6;
      setBalls(over + "." + ball);
    }
  };
  const borderStyle = {
    border: "2px solid tomato",
  };
  return (
    <div>
      <h4 style={borderStyle}>Over: </h4>
      <div style={borderStyle}>
        <h3>Bowler: {bowlerName}</h3>
        <p>
          <strong>Over: {ball}</strong>
        </p>
        <button onClick={handleBall}>Click for Ball</button>
      </div>
    </div>
  );
}
