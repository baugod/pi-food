import {Recipes} from '../Cards/Cards';
import React from 'react';
//import { Filter } from '../FilterOptions/filter';
import {Sort} from '../FilterOptions/sorts';
import './homeStyle.css'


export default function Home(){
    return (
        <>
      <div className="filter">
        {/* <Filter />*/}
        <Sort  />
      </div>
            <div>
            <Recipes />   
            </div>
        </>
            )
}
  
