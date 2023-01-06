import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRecipes: [],
    recipefilter: [],
    typeDiets: [],
    loading: true,
    error: false
}

const recipeSlice = createSlice({
    title: "Recipe",
    initialState,
    reducers:{
        getAllRecipes(state, action){
            state.allRecipes = action.payload;
            state.recipefilter = action.payload;
        },
        getAllDiets(state, action){
            state.typeDiets = action.payload;
        },
        filterById(state, action){
            const filterId = state.allRecipes
            const idFind = filterId.find((recipe) => {
                if(typeof action.payload === 'number'){
                    if(recipeIdApi === action.payload) return recipe
                } else {
                    if(recipe.id === action.payload) return recipe
                }
            });
            return{ 
                ...state,
                detail:idFind
            };
        },
        filterByTypeDiet(state, {payload}){
            const recipesAll = state.allRecipes

            const filterByDiets = action.payload === 'Filter by type' ? 
            state.recipesAll : recipesAll.filter(recipe => {
                console.log(recipe.diets.length)
                if (recipe.diets.length > 0) {
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
                
                if ((action.payload === 'vegetarian') && (recipe.hasOwnProperty('vegetarian')) && (recipe.vegetarian === true)) return recipe
                
                if ((action.payload === 'dairyFree') && (recipe.hasOwnProperty('dairyFree')) && (recipe.dairyFree === true)) return recipe
                })
            return{
                ...state,
                recipes: filterByDiets
            } 
        },
        filterByCreated(state, {payload}){
            const allRecipes = state.recipefilter;
            const filter = payload === 'all' ? allRecipes : allRecipes.filter(el => {
                return el?.isDB === Boolean(payload)
            });
            state.recipefilter = filter;
        },
        sortByAsc(state, {payload}){
            const sortedName = payload === 'asc' ?
            state.recipefilter.sort((a, b) => { 
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1;
                }
                return 0
            }) :
            state.recipefilter.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            })

            state.recipefilter = sortedName;
        },
        sortByScore(state, action){
            recipesByScore = action.payload === 'SSc'?state.allRecipes.sort((a,b) => {
                if((a.score - b.score) < 0) return 1 
                else return -1
            }) : state.allRecipes.sort((a,b)=> {
                if((a.healthScore - b.healthScore) < 0) return 1
                else return -1
            })
            return {
                ...state,
                recipes: recipesByScore
            }
        },
        filterByOrder(state, action){
            const recipesByOrder = action.payload === 'up' ? state.allRecipes.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                else return -1
                   }): state.allRecipes.sort((a, b) => {
                          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                          else return -1
                           })
        return{
          ...state,
         recipes: recipesByOrder
       } 
        }
        
    }
})

export const { 
    getAllDiets,
    getAllRecipes,
    filterByCreated,
    filterById,
    filterByOrder,
    filterByTypeDiet,
    sortByScore,
    sortByAsc
} = recipeSlice.actions;

export default recipeSlice.reducer;