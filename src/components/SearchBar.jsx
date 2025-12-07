import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const linkClass = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <h1>What's On The Menu</h1>
      <div className="nav-links">
        <Link className={linkClass("/")} to="/">Home</Link>
        <Link className={linkClass("/meals")} to="/meals">Meals</Link>
        <Link className={linkClass("/plan")} to="/plan">Weekly Plan</Link>
        <Link className={linkClass("/favorites")} to="/favorites">Favorites</Link>
        <Link className={linkClass("/groceries")} to="/groceries">Groceries</Link>
      </div>
    </nav>
  );
}
