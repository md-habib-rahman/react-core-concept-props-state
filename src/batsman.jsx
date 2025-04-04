import { useState } from "react";

export default function Batsman({batsmanName}) {
  const [runs, setRuns] = useState(0);

  const randomRuns = () => {
    const run = Math.round(Math.random() * 6);
    console.log(run);
    const newRun = runs + run;
    setRuns(newRun);
  };

  const batsmanStyle = {
    border: "2px solid yellow",
  };

  return (
    <div style={batsmanStyle}>
      <h3>Batsman: {batsmanName}</h3>
      <h1>Score: {runs}</h1>
      <button onClick={randomRuns}>Click for Run</button>
    </div>
  );
}
