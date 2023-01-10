
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [counter, setCounter] = useState(1);

const downPage = () =>{
    setCounter(counter - 1);
}
const upPage = ()=>{
    setCounter(counter + 1);
}
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipe = await fetch("http://localhost:3001/recipes");
        const data = await recipe.json();
        if(counter === 1){
          const aux = data.splice(0,9);
          return setRecipes(aux);
        }else{
        const aux = data.splice(counter*10-10, counter*10-1)
        return setRecipes(aux)
        }
      } catch (error) {
        return error.message;
      }
    };
    getRecipes();
  }, [counter]);

  return (
    <Link>
    <div>
      {recipes.map((r) => {
        return (
          <div>
            <p key={r.id}>{r.title}</p>
            <img src={r.image} alt={r.title} />
          </div>
        );
      })}

      <button onClick={downPage}>-</button>
      <span>{counter}</span>
      <button onClick={upPage}>+</button>
    </div>
    </Link>
  );
}






// export default function Cards(){
//     const state = useSelector((state) => state.recipe);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [recipesPerPage, setRecipesPerPage] = useState(10);
//     const indexOfLastRecipe = currentPage * recipesPerPage;
//     const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

//     const currentRecipes = state.recipesFilter?.slice(indexOfFirstRecipe, indexOfLastRecipe);

//     if(!state.recipesFilter.length){
//         return <Loading/>;
//     } else {
//         return (
//             <>
//             <div>
//                <Pagination
//                 recipesPerPage = {recipesPerPage}
//                 allRecipes = {state.recipesFilter?.length}
//                 currentPage = {currentPage}
//                 paginado = {setCurrentPage}
//             />
//             </div>
//             <div className="">
//                 {state.recipesFilter ? currentRecipes.map((e) => <Card key={e.name} recipe={e}/>)
//             : null }
//             </div>
//           </>
//         );
//     }
// }
