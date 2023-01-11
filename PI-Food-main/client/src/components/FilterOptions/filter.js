import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTypeDiet, filterByCreated} from "../../Redux/recipeSlice";
import style from "./filter.css"

export  function Filter() {
    const{ typeDiet } = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({typeDiets: "all", isDB: "all"});
    var typeDiets = filter.typeDiet;
    var isDB = filter.isDB;

    function handleChangeFilter(e){
        typeDiets = e.target.value;
        setFilter({...filter, isDB:e.target.value});
    }
    function hamdleChangeFilterDB(e) {
        isDB = e.target.value;
        setFilter({...filter, isDB: e.target.value});
    }
    function handleChangeForm(){
        dispatch(filterByTypeDiet(typeDiets));
        dispatch(filterByTypeDiet);
    }
    function clearFilter(){
        setFilter({
            typeDiet:"all",
            isDB:"all"
        });
        dispatch(filterByTypeDiet("all"));
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
              value= {typeDiets}
              >
              <option disable selected value="all">
                Filter by type diet
              </option>
              <option value="all">
                All
              </option>
              {typeDiet.map((e)=> (
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