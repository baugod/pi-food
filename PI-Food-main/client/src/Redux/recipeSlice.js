import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRecipes: [],
  recipefilter: [],
  typeDiets: [],
  loading: true,
  error: false,
};
const recipeSlice = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    getAllRecipes(state, action) {
      state.allRecipes = action.payload;
      state.recipefilter = action.payload;
    },
  },
});

export const { getAllRecipes } = recipeSlice.actions;
export const recipeRed = recipeSlice.reducer;