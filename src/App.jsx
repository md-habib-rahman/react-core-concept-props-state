import { Suspense } from "react";
import "./App.css";
import Batsman from "./batsman";
import Bowler from "./bowler";
import Counter from "./counter";
import Users from "./Users";
import Friends from "./Friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

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
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      {/* <Bowler bowlerName="Nahid Hasan"></Bowler> */}
      {/* <Batsman batsmanName="Tamim Iqbal"></Batsman> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("I am clicked")}>Click Me</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button> */}
    </>
  );
}

export default App;
