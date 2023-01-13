import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCreated, filterByDiets} from "../../Redux/recipeSlice";
import style from "./filter.css"

export  function Filter() {
    const{diet} = useSelector((state)=> state.recipes);
    console.log("HOlaaa");
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({diets: "all", isDB: "all"});
    var diets = filter.diets;
    var isDB = filter.isDB;

    function handleChangeFilter(e){
        diets = e.target.value;
        setFilter({...filter, isDB:e.target.value});
    }
    function hamdleChangeFilterDB(e) {
        isDB = e.target.value;
        setFilter({...filter, isDB: e.target.value});
    }
    function handleChangeForm(){
        dispatch(filterByDiets(diets));
        dispatch(filterByDiets);
    }
    function clearFilter(){
        setFilter({
            diets:"all",
            isDB:"all"
        });
        dispatch(filterByDiets("all"));
        dispatch(filterByCreated("all"));
    }

    return (
        <>
          <div className={style.container}>
           <h2>Filter</h2>
            <div className={style.filtercontaier}>
             <form onChange={handleChangeForm}>
              <select 
              className={style.select}
              onChange={handleChangeFilter}
              value= {diets}
              >
              <option disable selected value="all">
                Filter by type diet
              </option>
              <option value="all">
                All
              </option>
              {diets.map((e)=> (
                <option value={e} key={e}> {e} </option>
              ))}
              </select>
              <select
                onChancge={hamdleChangeFilterDB}
                className={style.select}
                value={isDB}
                >
                <option disabled selected value="all">
                    filter by created
                </option>
                <option value="all"> All</option>
                <option value=""> Api</option>
                <option value="">DB</option>
              </select>
              </form>
              <button onClick={clearFilter} className={style.button}> Clear filter</button>
            </div>
          </div>
         </>    
    );
}