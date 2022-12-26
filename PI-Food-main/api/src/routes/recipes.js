const { Router } = require ('express');
const axios = require ('axios');
const { getAllRecipes, getApiById, getDbById } = require ('../controller/controller.js');
const {Recipe, Typediet} = require ('../db'); 

const router = Router();

router.get ('/', getAllRecipes);

router.get ('/:id', async (req, res)=> {
    const {id} = req.params;
    const allRecipes = await getAllRecipes();
    let validator = id.includes("-");

    if(validator){
    try {
        let idDb = await Recipe.findByPk(id, {includes: Typediet});
        res.status(200).json([idDb]);
    } 
    catch(err) {
        console.log(err);
    }
  }
  else {
    try{
        if(id) {
            let recipeId = await allRecipes.filter((e)=> e.id === parseInt(id));
            recipeId.length
            ?res.status(200).send(recipeId)
            :res.status(400).send("Not found");
        }
    } catch(err) {
        res.json({message: err});
    }
  }
});


module.exports = router;
