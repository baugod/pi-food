import { useNavigate } from "react-router-dom";
import './CardStyle.css';

export function Card({recipe}){
    const {title, typeDiet} = recipe;
    const image = recipe.img;
  
    
    const type = Array.isArray(typeDiet) ? typeDiet.slice(0,3).join() : typeDiet?.split(",").slice(0,3).join();

    const navigate = useNavigate();
    const click = () => {
      navigate(`/details/${recipe.id}`);
    };
    return (
        <div className="container">
            <div className="card">
              <div className="card-details">
          <div className="text-title">
          <h1 key={recipe.id}>{title}</h1>
          </div>
          <img className='recipeImg' src={image}alt={"Imagen"}/>
          <h4>Dietas:{type}</h4>
          
          <button className="card-button" onClick={recipe.id ? click : null}>Más Info</button>
          
              </div>
        </div>
        </div>
      );
    
}

