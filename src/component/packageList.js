import React from "react";
import Item from "./items";

function PackagingList({ item }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
export default PackagingList;
