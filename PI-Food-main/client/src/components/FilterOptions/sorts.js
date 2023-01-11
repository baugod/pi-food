import { useDispatch } from 'react-redux';
import { sortByScore, sortByAsc} from '../../Redux/recipeSlice';
import style from './filter.css';
export function Sort(){
    const dispatch = useDispatch();
    function handleChangeSortAsc(e){
        dispatch(sortByAsc(e.target.value))
    };
    function handleChangeSortByScore(e){
        dispatch(sortByScore(e.target.value))
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
            <select classname={style.select} onChange={handleChangeSortByScore}>
                <option value='max'>Max score</option>
                <option value='min'>Min score</option>
            </select>
         </div>
        </div>
        </>
    )
}