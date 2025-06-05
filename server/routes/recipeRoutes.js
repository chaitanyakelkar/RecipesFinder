// routes/recipeRoutes.js
import express from 'express';
import Recipe from '../models/Recipe.js';

const router = express.Router();

// search for suggestions of ingredients
// Route: GET /api/recipes/suggestions?input=egg
router.get("/suggestions", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim() === "") {
      return res.status(400).json({ error: "Query string 'q' is required" });
    }

    const regex = new RegExp(q, "i"); // Case-insensitive regex

    // Find recipes with any ingredient matching the query (as string)
    const recipes = await Recipe.find({
      ingredients: { $in: [regex] }
    });

    const matchedIngredients = new Set();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.toLowerCase().includes(q.toLowerCase())) {
          matchedIngredients.add(ingredient);
        }
      });
    });

    res.json({ suggestions: Array.from(matchedIngredients) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new recipe
// POST /api/recipes/add
// Body: { name: "Paneer Butter Masala", ingredients: ["paneer", "butter", "tomato", "cream"] }
router.post('/add', async (req, res) => {
  const { name, ingredients } = req.body;

  if (!name || !ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: 'Invalid recipe data' });
  }

  try {
    // Check if recipe with same name exists (case-insensitive)
    const existing = await Recipe.findOne({ name: { $regex: `^${name}$`, $options: 'i' } });
    if (existing) {
      return res.status(409).json({ error: 'Recipe already exists' });
    }

    const recipe = new Recipe({ name, ingredients });
    await recipe.save();
    res.status(201).json({ message: 'Recipe added successfully', recipe });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add recipe' });
  }
});

export default router;
