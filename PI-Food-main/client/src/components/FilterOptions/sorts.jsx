import { useDispatch } from 'react-redux';
import {sortByAsc} from '../../Redux/recipeSlice';
import style from './filter.css';
export function Sort(){
    const dispatch = useDispatch();
    function handleChangeSortAsc(e){
        dispatch(sortByAsc(e.target.value))
    };
    return(
        <>
        <div className={style.container} style= {{marginBottom: '30px'}}>
         <h2>Sort</h2>
         <div classname={style.filtercontainer}>
            <select className={style.select} onChange={handleChangeSortAsc}>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
         </div>
        </div>
        </>
    )
}