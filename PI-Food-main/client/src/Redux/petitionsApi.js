import axios from "./axios.js";
import { getAllRecipes } from "./recipeSlice.js";


export async function allRecipesApi(dispatch) {
    try {
        const petition = await axios.get('/recipes');
        dispatch(getAllRecipes(petition?.data));
        //console.log(petition.data);
        return;
    } catch (error){
        return error.response;
    }
}
export async function allDiets(dispatch) {
    const peticion = await axios.get(`/diets`);
    dispatch(getAllRecipes(peticion?.data));
    return;
  }
  export async function apiAllbyname(dispatch, name) {
    const peticion = await axios.get(`/recipes?name=${name}`);
    dispatch(getAllRecipes(peticion?.data));
    return;
  }
  export async function apiPostRecipe(newRecipe) {
    return await axios.post("/recipe", {
      ...newRecipe,
      title: newRecipe.title,
      image: newRecipe.image,
      summary: newRecipe.summary,
      healthScore :newRecipe.healthScore,
      diets : newRecipe.diets,
      analyzedInstructions: newRecipe.analyzedInstructions,
    })};