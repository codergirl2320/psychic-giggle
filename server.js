const express = require('express');
const app = express();
const recipesController = require('./controllers/recipes.js')
const mongoose = require('mongoose');
app.use(express.json())
app.use('/recipes', recipesController)
app.use(express.static('public'));





mongoose.connect('mongodb://localhost:27017/recipecrud', { useNewUrlParser: true, useUnifiedTypology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
app.listen(3000, ()=>{
	console.log('app is listening')
})