import React, { useEffect, useState } from "react";
import { fetchJSON } from "../api";

export default function Groceries() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const data = await fetchJSON("/groceries");
    setItems(data);
  };

  useEffect(() => { loadItems(); }, []);

  return (
    <div>
      <h2>Grocery List</h2>
      {items.length > 0 ? (
        <ul className="grocery-list">
          {items.map(item => (
            <li key={item.name}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
      ) : (
        <p>No groceries yet. Add meals to your weekly plan!</p>
      )}
    </div>
  );
}
