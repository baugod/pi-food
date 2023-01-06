import axios from "./axios.js";
import { getAllDiets, getAllRecipes } from "./recipeSlice";

export async function allRecipesApi(dispatch) {
    try {
        const petition = await axios.get('/recipes');
        dispatch(getAllRecipes(petition?.data));
        return;
    } catch (error){
        return error.response;
    }
}

export async function allDietsApi(dispatch) {
    const petition = await axios.get('/diets');
    dispatch(getAllDiets(petition?.data));
    return;
}

export async function byNameApi(dispatch, name){
    const petition = await axios.get(`/recipes?name=${name}`);
    dispatch(getAllRecipes(petition?.data));
    return;
}
