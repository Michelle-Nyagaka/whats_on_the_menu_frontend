import React, { useState } from "react";

export default function MealForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.instructions) return;

    const mealData = {
      ...formData,
      ingredients: formData.ingredients.split(",").map(i => i.trim())
    };

    onAdd(mealData);

    setFormData({ name: "", image: "", ingredients: "", instructions: "" });
  };

  return (
    <form className="meal-form" onSubmit={handleSubmit}>
      <h2>Add New Meal</h2>
      <input
        type="text"
        name="name"
        placeholder="Meal name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (comma separated)"
        value={formData.ingredients}
        onChange={handleChange}
      />
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={formData.instructions}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Meal</button>
    </form>
  );
}
