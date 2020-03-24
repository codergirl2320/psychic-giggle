const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
	title: String,
	url: String
})

const Recipe = mongoose.model('Recipe1', recipeSchema);

module.exports = Recipe;