import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to What's On The Menu</h2>
      <p>Plan your week with easy meal prep and track your favorites!</p>
      <div className="home-buttons">
        <Link to="/meals" className="btn">Browse Meals</Link>
        <Link to="/plan" className="btn">Weekly Planner</Link>
        <Link to="/favorites" className="btn">Favorites</Link>
        <Link to="/groceries" className="btn">Groceries</Link>
      </div>
    </div>
  );
}
