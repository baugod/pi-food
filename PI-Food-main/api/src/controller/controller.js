const axios = require('axios');
const dotenv = require ('dotenv');
const { getApiInfo, getDBinfo, getApiById, getDbById} = require ('./helpers')
const {Sequelize} = require('sequelize');
const { API_KEY } = process.env;
dotenv.config();

const getRecipeForId = async (req, res)=> {
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
};

const getAllRecipes = async (req, res) => {
 const apiInfo = await getApiInfo();
 const dbInfo = await getDBinfo();
 const allInfo = apiInfo.concat(dbInfo);
// console.log(dbInfo);
 return res.status(200).json(allInfo);
}

 module.exports = {
  getRecipeForId,
  getAllRecipes
 }