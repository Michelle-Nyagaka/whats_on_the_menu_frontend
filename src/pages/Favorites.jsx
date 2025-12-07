import React, { useEffect, useState } from "react";
import { fetchJSON } from "../api";
import MealCard from "../components/MealCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    const data = await fetchJSON("/favorites");
    setFavorites(data);
  };

  useEffect(() => { loadFavorites(); }, []);

  return (
    <div>
      <h2>Favorite Meals</h2>
      <div className="grid">
        {favorites.map(f => (
          <MealCard key={f.id} meal={f} />
        ))}
      </div>
    </div>
  );
}
