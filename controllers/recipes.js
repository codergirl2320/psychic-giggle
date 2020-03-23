const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js');


router.post('/', (req,res)=>{
	console.log(req.body)
	Recipes.create(req.body,(err,createdRecipe)=>{
		res.json(createdRecipe);
	})
})
router.get('/',(req,res)=>{
	Recipes.find({},(err,foundRecipe)=>{
		res.json(foundRecipe);
	})
})
router.delete('/:id',(req,res)=>{
	Recipes.findByIdAndRemove(req.params.id,(err,deleted)=>{
		res.json(deleted);
	})
})
router.put('/:id',(req,res)=>{
	Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updated)=>{
		res.json(updated);
	})
})



module.exports=router;