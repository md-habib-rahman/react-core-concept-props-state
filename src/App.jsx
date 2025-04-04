import "./App.css";
import Batsman from "./batsman";
import Counter from "./counter";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman batsmanName="Tamim Iqbal"></Batsman>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("I am clicked")}>Click Me</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button> */}
    </>
  );
}

export default App;
