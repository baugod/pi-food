const axios = require('axios');
const dotenv = require ('dotenv');
const { getApiInfo, getDBinfo, getApiById, getDbById, getAlldiets} = require ('./helpers')
const {Sequelize} = require('sequelize');
const { API_KEY } = process.env;
dotenv.config();
const {TypeDiet} = require ("../db.js");
const db = require('../db.js');

const getAllRecipes = async (req, res) => {
 const apiInfo = await getApiInfo();
 const dbInfo = await getDBinfo();
 const allInfo = [...dbInfo, ...apiInfo];

 return res.status(200).json(allInfo);
};

 const getDiets = async (req, res) => {
     try {
      const dietas = await getAlldiets();
       return res.status(200).json(dietas)
   } catch (error) {
    return res.status(500).json(error.message);
  }
 };
const getForName = async (req, res) => {
    try {
        const response = await AllInfo();
        const {name} = req.query;
        const recipeName = await response.filter(r => r.title.toLowerCase().includes(name.toLowerCase()))
         return res.status(200).send(recipeName);
    } catch (error) {
     return res.status(400).send(error.message);   
    }};

const getRecipeForId = async (req, res)=> {
  const {id} = req.params;
// const apiId = await getApiById();
try {
    const recipeApi = await getApiById(id);
    const dbId = await getDbById();
   // const allInfo = [...recipeApi, ...dbId]
if(!recipeApi) return res.status(404).send("La receta no existe");
return res.status(200).json(recipeApi)
} catch(err){ 
 return res.status(500).send(err.message);

}};

 module.exports = {
  getDiets,
  getForName,
  getRecipeForId,
  getAllRecipes
 }