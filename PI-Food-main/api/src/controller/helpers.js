const {Sequelize} = require('sequelize');
const axios = require('axios');
const{Recipe,TypeDiet} = require('../db')
const { API_KEY } = process.env;
const dotenv = require ('dotenv');
dotenv.config();

const getApiInfo = async () => {
//const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
    const apiUrl = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
    const apiInfo = await apiUrl.data.results.map(e =>{
     // console.log(apiUrl.data.result)
      return {
        id: e.id, 
        title: e.title,
        img: e.image,
             typeDiets: e.diets.map((d)=> {return{name:d}}), 
             spoonacularScore : e.spoonacularScore,   
             dishTypes: e.dishTypes.map((d)=> {return{name:d}}), 
             summary: e.summary,            
             healthScore: e.healthScore,    
             analyzedInstructions: e.analyzedInstructions
            }
            
          })
          //   console.log(apiInfo)
    return apiInfo
}

const getDBinfo = async () => {
  return await Recipe.findAll({
    includes: {
      model: TypeDiet,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  });
};

const getApiById = async (id) => {
  //return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    return await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
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