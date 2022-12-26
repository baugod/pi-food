import {
    CardContainer,
    TittleContainer, 
    ImageContainer, 
    Image, 
    FootInformacion, 
    DietsContainer, 
    H4,
    TypesContainer,
    
    
    H3, CardCont, Img, H6, Cabeza,
   Caracteristicas, AuxContainer, Precio
   }
from './CardStyled';
import React from 'react';
import { useNavigate }  from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { searchId } from '../actions/index.js'

function Card({id, name, image, diets, types}) {
//#goldenrod
  const dispatch = useDispatch();
  const navegate = useNavigate();

async function handleId(id){
   await dispatch(searchId(id));
   navegate('/detail');
}

   return (   
       <CardCont>
               <Img src={image} alt= 'image' 
               onClick={() => handleId(id)}/>
    
               <Cabeza>
                   <AuxContainer>
                   <H3>{name}</H3> 
                   </AuxContainer>
              </Cabeza>
   
              <Caracteristicas>
              <AuxContainer>
                <H6>
                Diets Types:
                </H6> 
                {diets?.map((diet, index) => <> {diet}, </> )}
              </AuxContainer>

              <AuxContainer>
              <H6>
                 Dish Types:
              </H6>
                {types?.map((dish, index)=> <> {dish.name ? dish.name : dish}, </>)}

              </AuxContainer>
               </Caracteristicas>
   
         </CardCont>
         )
}

export default Card;