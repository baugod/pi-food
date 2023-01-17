import axios from "./axios.js";
import { getAllRecipes, getRecipeById } from "./recipeSlice.js";


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
    const peticion = await axios.get(`/name=${name}`);
    dispatch(getAllRecipes(peticion?.data));
    return;
  }

  export async function apiRecipeById(dispatch, id) {
    try {
      const peticion = await axios.get(`/recipes/${id}`);
      console.log(peticion.data);
      dispatch(getRecipeById(peticion?.data));
      return;
    } catch (error) {
      return error.response;
    }
  }
  
  export async function apiPostRecipe(newRecipe) {
    return await axios.post("/Recipe", {
      ...newRecipe,
      title: newRecipe.title,
      image: newRecipe.image,
      summary: newRecipe.summary,
      healthScore :newRecipe.healthScore,
      diets : newRecipe.diets,
      analyzedInstructions: newRecipe.analyzedInstructions,
    })};

