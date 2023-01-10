import Cards from '../Cards/Cards';
import React from 'react';

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
  
