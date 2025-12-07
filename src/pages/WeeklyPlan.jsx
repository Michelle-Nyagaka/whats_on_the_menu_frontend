import React, { useEffect, useState } from "react";
import { fetchJSON, postJSON } from "../api";

export default function WeeklyPlan() {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const [planner, setPlanner] = useState({});
  const [meals, setMeals] = useState([]);

  const loadPlanner = async () => {
    const data = await fetchJSON("/planner");
    const grouped = {};
    days.forEach(d => grouped[d] = []);
    data.forEach(e => grouped[e.day].push(e.meal_id));
    setPlanner(grouped);
  };

  const loadMeals = async () => {
    const data = await fetchJSON("/meals");
    setMeals(data);
  };

  useEffect(() => { loadPlanner(); loadMeals(); }, []);

  const addMealToDay = async (day, mealId) => {
    await postJSON(`/planner/${day}?meal_id=${mealId}`, {});
    loadPlanner();
  };

  const removeMealFromDay = async (day, mealId) => {
    await fetchJSON(`/planner/${day}/${mealId}`, { method: "DELETE" });
    loadPlanner();
  };

  const getMealName = id => meals.find(m => m.id === id)?.name || "Unknown";

  return (
    <div>
      <h2>Weekly Planner</h2>
      <div className="planner-grid">
        {days.map(day => (
          <div key={day} className="day-column">
            <h3>{day}</h3>

            {planner[day]?.map(id => (
              <div key={id} className="planner-item">
                {getMealName(id)}
                <button
                  onClick={() => removeMealFromDay(day, id)}
                  style={{
                    marginLeft: "5px",
                    padding: "2px 5px",
                    fontSize: "0.75rem",
                    background: "#e76f51",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer"
                  }}
                >
                  ✕
                </button>
              </div>
            ))}

            <select
              onChange={e => addMealToDay(day, e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Add meal...</option>
              {meals.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
