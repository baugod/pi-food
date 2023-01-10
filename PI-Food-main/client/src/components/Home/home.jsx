import {Recipes} from '../Cards/Cards';
import React from 'react';
//import style from './homeStyle.css'

export default function Home(){
    return (
        <section>
                <h1>Recetas</h1>
            <div>
            <button>Ordenar por:</button>
            <button>Filtrar por:</button>
            </div>
            <div>
            <Recipes />   
            </div>
        </section>
            )
}
  
