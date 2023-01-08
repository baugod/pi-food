const { Router } = require ('express');
const axios = require ('axios');
const { getAllRecipes, getRecipeForId, getForName} = require ('../controller/controller.js');
const {Recipe, Typediet} = require ('../db'); 

const router = Router();

router.get ('/recipes', getAllRecipes);

router.get('/recipes/:id', getRecipeForId);

router.get('/recipes?name', getForName);

module.exports = router;
