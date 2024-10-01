import { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  onDeleteItem,
  onhandleToggleItem,
  onDeleteAllItems,
}) => {
  const [sortby, setSortby] = useState("input");

  let sortedItems;

  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onhandleToggleItem={onhandleToggleItem}
          ></Item>
        ))}
      </ul>
      <div className="sctions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort byu packed status</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear lists</button>
      </div>
    </div>
  );
};

export default PackingList;
