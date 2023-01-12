import "./CardsStyle.css"
import React, { useState } from "react";
import {Card} from '../Card/Card';
import Paginado from '../paginado/paginado';
import Loading from '../Loading/loading';
import {useSelector} from 'react-redux'

export function Recipes() {
  const state = useSelector((state)=> state.recipe);
  console.log(state);

  const[currentPage, setCurrentPage] = useState(1);
  const[recipePerPage, setRecipePerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;

  const currentRecipe = state.recipeFilter?.slice(indexOfFirstRecipe, indexOfLastRecipe);
  if(state.recipeFilter.length){
    return <Loading/>;
  } else {
    return(
      <>
      <div>
        <Paginado
          recipePerPage={recipePerPage}
          allRecipe={state.recipeFilter?.length}
          currentPage={currentPage}
          paginado={setCurrentPage}
          /> 
      </div>
      <div className="">
        {state.recipeFilter? currentRecipe.map((e)=> 
        <Card key={e.title} recipe={e}/>) : null}
      </div>
      <div>
        <Paginado
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