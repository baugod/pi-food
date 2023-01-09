const axios = require('axios');
const dotenv = require ('dotenv');
const { getApiInfo, getDBinfo, getApiById, getDbById} = require ('./helpers')
const {Sequelize} = require('sequelize');
const { API_KEY } = process.env;
dotenv.config();
const {TypeDiet} = require ("../db.js");
const db = require('../db.js');

const getAllRecipes = async (req, res) => {
 const apiInfo = await getApiInfo();
 const dbInfo = await getDBinfo();
 //const allInfo = apiInfo.concat(dbInfo);

 return res.status(200).json(apiInfo);
}

const getAllDiets = async (req, res) => {
    console.log("hola")
    try {
     const dietas = await TypeDiet.findAll();
     if(dietas) return dietas.map((e)=> e.name)
      return res.status(200).json(dietas)
  } catch (error) {
   return res.status(500).json(error.message);
 }
}
const getForName = async (req, res) => {
  try {
      const { name } = req.query;
      let allRecipes = await getAllRecipes()    
      
      if (name) {
          let recipeByName = await allRecipes.filter(e => e.title.toLowerCase().includes(title.toString().toLowerCase()));
    
          if (recipeByName.length) {
              let recipes = recipeByName.map(e => {
                  return {
                      image: e.image,
                      title: e.title,
                      dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                      score: e.score,
                      id: e.id
                  }
              })
              return res.status(200).send(recipes); 
          }  
          return res.status(404).send('La receta no existe')
      } else {
          let recipes = allRecipes.map(e => {
              return {
                  image: e.image,
                  title: e.title,
                  dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                  score: e.score,
                  id: e.id
              }
          })
          return res.status(200).send(recipes);
      }
  } catch {
     return res.status(400).send('input invalido');
  }
};

const getRecipeForId = async (req, res)=> {
  const {id} = req.params;
// const apiId = await getApiById();
try {
    const recipeApi = await getApiById(id);
    const dbId = await getDbById();
   // const allInfo = [...recipeApi, ...dbId]
if(!recipeApi) return res.status(404).send("La receta no existe");
return res.status(200).json(dbId)
} catch(err){ 
 return res.status(500).send(err.message);

}};

 module.exports = {
  getAllDiets,
  getForName,
  getRecipeForId,
  getAllRecipes
 }