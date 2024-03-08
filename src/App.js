import React from "react";
import { useState } from "react";
import Logo from "./component/logo";
import Form from "./component/form";
import PackagingList from "./component/packageList";
import Stats from "./component/stats";

export default function App() {
  const [items, setItems] = useState([]);
  // const [numItems, setNumItems] = useState([]);
  //to add items
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //to delete iteams
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleclearList(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItemsHandle={handleAddItems} />
      <PackagingList
        onDeleteItem={handleDeleteItems}
        item={items}
        onToggleItem={handleToggleItem}
        onClearList={handleclearList}
      />
      {/* <Item /> */}
      <Stats items={items} />
    </div>
  );
}
