import React, { useEffect, useState } from "react";
import { fetchJSON, postJSON } from "../api";
import MealCard from "../components/MealCard";
import MealForm from "../components/MealForm";
import SearchBar from "../components/SearchBar";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");

  // Load meals from backend
  const loadMeals = async () => {
    const data = await fetchJSON("/meals");
    setMeals(data);
  };

  useEffect(() => { loadMeals(); }, []);

  const addMeal = async (mealData) => {
    await postJSON("/meals", mealData);
    loadMeals();
  };

  const deleteMeal = async (id) => {
    await fetchJSON(`/meals/${id}`, { method: "DELETE" });
    loadMeals();
  };

  // Filter meals by search query
  const filteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>All Meals</h2>
      <MealForm addMeal={addMeal} />
      <SearchBar query={query} setQuery={setQuery} />
      {filteredMeals.length > 0 ? (
        <div className="grid">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} onDelete={deleteMeal} />
          ))}
        </div>
      ) : (
        <p>No meals found.</p>
      )}
    </div>
  );
}
