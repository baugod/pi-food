const { Router } = require ('express');
const axios = require ('axios');
const { getAllRecipes, getRecipeForId, getForName} = require ('../controller/controller.js');
const {Recipe, Typediet} = require ('../db'); 

const router = Router();

router.get ('/', getAllRecipes);

router.get('/:id', getRecipeForId);

router.get('/recipes?name', getForName);

module.exports = router;
