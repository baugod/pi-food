const {Sequelize} = require('sequelize');
const axios = require('axios');
const{Recipe,TypeDiet} = require('../db')
require ('dotenv').config();

const getApiInfo = async () => {
const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`)
    const apiInfo = await apiUrl.data.results.map((e)=>{
      return {
        id: e.id, 
        title: e.title,
        summary: e.summary,
        diets: e.diets.map(r =>{return {name: r}}),
        score: e.spoonacularScore,
        healthScore: e.healthScore,
        img: e.image,
             }
           })
          //   console.log(apiInfo)
    return apiInfo
}

const getDBinfo = async () => {
  return await Recipe.findAll({
    includes: {
      model: TypeDiet,
      attributes: ['title'],
      through: {
        attributes: []
      }
    }
  });
};

  const getApiById = async (id) => {
    const recipes = await getApiInfo();
    const recipesId = await recipes.find((d) => d.id == id);
    return recipesId;
  };
  
 const getDbById = async (id) => {
   return await Recipe.findByPk(id, {
     includes:{
       model: TypeDiet,
       attributes: ['name'],
       through: {
         attributes: []
       } }
   });
 }

module.exports = {
    getApiInfo,
    getDBinfo,
    getApiById,
    getDbById,
   }