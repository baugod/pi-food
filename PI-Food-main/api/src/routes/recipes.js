const { Router } = require ('express');
const axios = require ('axios');
const { getAllRecipes, getRecipeForId } = require ('../controller/controller.js');
const {Recipe, Typediet} = require ('../db'); 

const router = Router();

router.get ('/', getAllRecipes);

router.get('/:id', getRecipeForId);

module.exports = router;
