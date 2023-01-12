import axios from "./axios.js";
import { getAllRecipes } from "./recipeSlice.js";


export async function allRecipesApi(dispatch) {
    try {
        const petition = await axios.get('/recipes');
        dispatch(getAllRecipes(petition?.data));
        return;
    } catch (error){
        return error.response;
    }
}