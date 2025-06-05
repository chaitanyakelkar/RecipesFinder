// models/Recipe.js
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
});

export default mongoose.model('Recipe', recipeSchema);
