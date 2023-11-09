import React from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Mo's Travel checkList 🧳</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip Mainah 😍?</h3>
    </form>
  );
}
function PackagingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      <em>
        You sure you have x items on your list, and already packed X(X%) and
        that on period!!!
      </em>
    </footer>
  );
}
