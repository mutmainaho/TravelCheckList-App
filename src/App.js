import React from "react";
import { useState } from "react";
import Logo from "./component/logo";
import Form from "./component/form";
import PackagingList from "./component/packageList";
import Stats from "./component/stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItemsHandle={handleAddItems} />
      <PackagingList item={items} />
      {/* <Item /> */}
      <Stats />
    </div>
  );
}
