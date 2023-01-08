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
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  });
};




async function getApiById(name) {
  try {
    let result = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=100`
    );
    let resolve = [];
    if (result.data) {
      result.data.results.map((item) => {
        let obj = RecipeFormater(
          item.id,
          item.title,
          item.spoonacularScore,
          item.image,
          item.diets
        );
        resolve.push(obj);
      });
      return resolve;
    } } catch (error) {
      console.log("error in axios by name");
    }
  }








// const getApiById = async (id) => {
//   return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`)
// };

// const getDbById = async (id) => {
//   return await Recipe.findByPk(id, {
//     includes:{
//       model: TypeDiet,
//       attributes: ['name'],
//       through: {
//         attributes: []
//       } }
//   });
// }

module.exports = {
    getApiInfo,
    getDBinfo,
    getApiById,
    //getDbById,
   }