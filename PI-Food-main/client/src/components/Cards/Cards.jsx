




import'./Recipes.css';
import { useEffect, useState } from 'react';
import axios from "axios";

export function Cards() {
const [recipes, setRecipes] = useState([]);

useEffect(()=>{
    getRecipes();
},[])

 const getRecipes = async() => {
    const recipe = await axios.get("http://localhost:3001/recipes");
setRecipes(recipe.data);
};
return (
    <div>
{recipes.map(r=>{
    return(
        <div>
            <p key={r.id}>{r.title}</p>
            <img src={r.image} alt={r.title}/>
        </div>
    )
})}
    </div>
)}










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
