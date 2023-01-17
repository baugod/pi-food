import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRecipes: [],
  recipefilter: [],
  typeDiets: [],
  loading: true,
  error: false,
};
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    getAllRecipes(state, action) {
      state.allRecipes = action.payload;
      state.recipefilter = action.payload;
      //console.log(action.payload);
    },
    getAllDiets(state, action){
      state.diets = action.payload;
    },
    getRecipeById(state, action){
      state.countryId= action.payload
    },
    filterByDiets(state, {payload}){
      const allRecipes = state.allRecipes;
      const filter = payload === 'all' ? state.allRecipes : allRecipes.filter(el => {
        return el?.diets?.includes(payload);
      });
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
        if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
        if (b.name.toLowerCase() > a.name.toLowerCase()) {return -1;}
        return 0
    }) :  
    state.recipefilter.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {return -1;}
        if (b.name.toLowerCase() > a.name.toLowerCase()) {return 1; }
        return 0;
    })
   state.recipefilter = sortedName;
},
  },
});

export const { getAllRecipes, getAllDiets, filterByCreated, filterByDiets, sortByAsc, getRecipeById } = recipeSlice.actions;
export const recipeRed = recipeSlice.reducer;