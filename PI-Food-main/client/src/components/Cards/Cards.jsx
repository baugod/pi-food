import "./CardsStyle.css"
import React, { useState } from "react";
import {Card} from '../Card/Card';
import LoaderFood from '../Loading/loading';
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
 

  const currentRecipe = state?.slice(currentPage, currentPage +9);
  
  const nextPage= () => {
    setCurrentPage(currentPage +9);
  }
  const prevPage= () => {
    if(currentPage > 1)
   setCurrentPage( currentPage +9)
  }

  if(!state.length){
    return <LoaderFood/>;
  } else {
    return(
      <>
      <div>
       <button onClick={prevPage}>Anterior</button>
       <button onClick={nextPage}>Siguiente</button>
      </div>
      <hr/>
      <div className="">
        {state? currentRecipe.map((e)=> 
        <Card key={e.title} recipe={e}/>) : null}
      </div>
      <div>
       <button onClick={nextPage}>Anterior</button>
       <button onClick={prevPage}>Siguiente</button>
      </div>
      </>
    )
  }
}