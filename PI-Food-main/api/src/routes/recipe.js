const { Router } = require('express');
const{Recipe,TypeDiet} = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    let{
        title,
        summary,
        spoonacularScore,
        healthScore,
        analyzedInstructions,
        createdInDb
    } = req.body
    if(!title || !summary) return res.status(400).send('Please, insert Title and Summary to continue!');
    try{
        let recipeCreate = await Recipe.create({ 
            title,
            summary,
            spoonacularScore,
            healthScore,
            analyzedInstructions,
            createdInDb,
          //  typeDiets
        })

       // let dietTypeDB = await TypeDiet.findAll({ where: {name: diets} });
       // recipeCreate.addTypeDiet(dietTypeDB);
        res.status(200).send('Recipe created!')
        // console.log(recipeCreate);
        // console.log(dietDB);
    }catch(error){
        return res.status(500).json(error.message);
    }
})
module.exports= router;