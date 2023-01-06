import Cards from '../Cards/Cards';
import Filter from '../FilterOptions/filter';
import Sort from '../FilterOptions/sorts';
import style from './homeStyle.css';

export default function Home(){
    return (
        <>
        <div className={style.container}>
            <div className={style.filter}>
                <Filter/>
                <Sort/> 
            </div>
            <div>
                <Cards/> 
            </div>
        </div>
        </>
    );
}
  
