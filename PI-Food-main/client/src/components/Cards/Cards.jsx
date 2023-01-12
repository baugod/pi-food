import "./CardsStyle.css"
import React, { useState } from "react";
import {Card} from '../Card/Card';
import Pagination from './pagination';
import Loading from '../Loading/loading';
import {useSelector, useDispatch} from 'react-redux';
//import { useEffect } from "react";
//import {allRecipesApi} from "../../Redux/petitionsApi";

export function Recipes() {
  // const dispatch = useDispatch();

  // useEffect(()=> {
  //   allRecipesApi(dispatch);
  // },[dispatch]);
  const state = useSelector((state)=> state.recipe.recipefilter);
  //console.log(state);

  const[currentPage, setCurrentPage] = useState(1);
  const[recipePerPage, setRecipePerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;

  const currentRecipe = state?.slice(indexOfFirstRecipe, indexOfLastRecipe);
  console.log(currentRecipe)
  if(!state.length){
    return <Loading/>;
  } else {
    return(
      <>
      <div>
        <Pagination
          recipePerPage={recipePerPage}
          allRecipe={state.recipeFilter?.length}
          currentPage={currentPage}
          paginado={setCurrentPage}
          /> 
      </div>
      <div className="">
        {state? currentRecipe.map((e)=> 
        <Card key={e.title} recipe={e}/>) : null}
      </div>
      <div>
        <Pagination
          recipePerPage={recipePerPage}
          allRecipe={state.recipeFilter?.length}
          currentPage={currentPage || 1}
          paginado={setCurrentPage}
          /> 
      </div>
      </>
    )
  }
}