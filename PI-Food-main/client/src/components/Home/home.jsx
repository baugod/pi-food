import Cards from '../Cards/Cards';
import React from 'react';
import style from './homeStyle.css'

export default function Home(){
    return (
        <section>
        {/* <div className={style.container}> */}
            {/* <div className={style.filter}>
                <Filter/>
                <Sort/>  */}
            {/* </div> */}
            <div>
                <Cards/> 
            </div>
        {/* </div> */}
        </section>
    );
}
  
