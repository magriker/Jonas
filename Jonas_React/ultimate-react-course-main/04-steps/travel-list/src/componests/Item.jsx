const Item = ({ item, onDeleteItem, onhandleToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.cheked}
        onChange={() => onhandleToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
