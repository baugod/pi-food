import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "./pagination";
import Loading from "../Loading/loading"



export default function Cards(){
    const state = useSelector((state) => state.recipe);

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(10);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    const currentRecipes = state.recipesFilter?.slice(indexOfFirstRecipe, indexOfLastRecipe);

    if(!state.recipesFilter.length){
        return <Loading/>;
    } else {
        return (
            <>
            <div>
               <Pagination
                recipesPerPage = {recipesPerPage}
                allRecipes = {state.recipesFilter?.length}
                currentPage = {currentPage}
                paginado = {setCurrentPage}
            />
            </div>
            <div className="">
                {state.recipesFilter ? currentRecipes.map((e) => <Card key={e.name} recipe={e}/>)
            : null }
            </div>
          </>
        );
    }
}
