import React, { useState } from "react";
import { postJSON } from "../api";

function MealCard({ meal, onDelete, refreshPlanner, refreshFavorites }) {
  const [selectedDay, setSelectedDay] = useState("");

  const addFavorite = async () => {
    await postJSON("/favorites", { meal_id: meal.id });
    alert(`${meal.name} added to favorites!`);
    if (refreshFavorites) refreshFavorites();
  };

  const addToPlanner = async () => {
    if (!selectedDay) return;
    await postJSON(`/planner/${selectedDay}?meal_id=${meal.id}`, {});
    alert(`${meal.name} added to ${selectedDay}!`);
    setSelectedDay("");
    if (refreshPlanner) refreshPlanner();
  };

  return (
    <div className="meal-card">
      {meal.image && <img src={meal.image} alt={meal.name} />}
      <h3>{meal.name}</h3>
      <p><strong>Ingredients:</strong> {meal.ingredients}</p>
      <p><strong>Instructions:</strong> {meal.instructions}</p>

      <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
        {onDelete && (
          <button onClick={() => onDelete(meal.id)}>Delete</button>
        )}

        <button onClick={addFavorite}>Add to Favorites</button>

        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Add to Planner...</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button onClick={addToPlanner} disabled={!selectedDay}>
          Add
        </button>
      </div>
    </div>
  );
}

export default MealCard;
