const axios = require('axios');
const dotenv = require ('dotenv');
const { getApiInfo, getDBinfo, getApiById, getDbById} = require ('./helpers')
const {Sequelize} = require('sequelize');
const { API_KEY } = process.env;
dotenv.config();
const {TypeDiet} = require ("../db.js");

const getAllDiets = async (req, res) => {
  try {
     const dietas = await TypeDiet.findAll();
      //const dietTypes = await dietas.findAll();
      return res.status(200).json(dietas)
  } catch (error) {
   return res.status(500).json(error.message);
 }
}
const getForName = async (req, res, next) => {
  try {
      const { name } = req.query;
     // let allRecipes = await getAllRecipes()    
      
      if (name) {
          let recipeByName = await allRecipes.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()));
         
          if (recipeByName.length) {
              let recipes = recipeByName.map(e => {
                  return {
                      image: e.image,
                      name: e.name,
                      dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                      score: e.score,
                      id: e.id
                  }
              })
              return res.status(200).send(recipes); 
          }  
          return res.status(404).send('Sorry, recipe not found')
      } else {
          let recipes = allRecipes.map(e => {
              return {
                  image: e.image,
                  name: e.name,
                  dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                  score: e.score,
                  id: e.id
              }
          })
          return res.status(200).send(recipes);
      }
  } catch {
     return res.status(400).send('invalid input');
  }
};

const getRecipeForId = async (req, res)=> {
  const {id} = req.params;
 // const allRecipes = await getAllRecipes();
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
};

const getAllRecipes = async (req, res) => {
 const apiInfo = await getApiInfo();
 const dbInfo = await getDBinfo();
 const allInfo = apiInfo.concat(dbInfo);
// console.log(dbInfo);
 return res.status(200).json(allInfo);
}

 module.exports = {
  getAllDiets,
  getForName,
  getRecipeForId,
  getAllRecipes
 }