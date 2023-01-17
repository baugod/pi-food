import "./CardsStyle.css"
import React, { useState } from "react";
import {Card} from '../Card/Card';
import LoaderFood from '../Loading/loading';
import {useSelector} from 'react-redux';
import Pagination from "./Pagination"

export function Recipes() {
  
  const state = useSelector((state)=> state.recipe.recipefilter);
  

  const [pagina,setPagina ] = useState(1);
  const [porPagina,setPorPagina ] = useState(9);
 
  const max = state.length/ porPagina;
  


  if(!state.length){
    return <LoaderFood/>;
  } else {
    return(
      <>
      <br>
      </br>
      <div>
      <Pagination pagina={pagina} setPagina={setPagina} max={max}/>
      </div>
      <div className="">
        {state?.slice((pagina-1)*porPagina,(pagina-1)*porPagina+porPagina).map((e) =>
        <Card key={e.title} recipe={e}/>) }
      </div>
      <div>
      <Pagination pagina={pagina} setPagina={setPagina} max={max}/>
      </div>
      </>
    )
  }
}