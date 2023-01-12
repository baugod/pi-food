import { configureStore } from "@reduxjs/toolkit";
import {recipeRed} from '../Redux/recipeSlice.js';
export const store = configureStore({
    reducer: {recipe: recipeRed},
})
