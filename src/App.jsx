import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import WeeklyPlan from "./pages/WeeklyPlan";
import Favorites from "./pages/Favorites";
import Groceries from "./pages/Groceries";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/plan" element={<WeeklyPlan />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/groceries" element={<Groceries />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
