import { useNavigate } from "react-router-dom";
import './CardStyle.css';

export function Card({recipe}){
    const {title, typeDiet} = recipe;
    const image = recipe.image;
    const healthScore = recipe.healthScore;
    
    //const type = Array.isArray(typeDiet) ? typeDiet.slice(0,3).join() : typeDiet?.split(",").slice(0,3).join();

    const navigate = useNavigate();
    const click = () => {
      navigate(`/details/${recipe.id}`);
    };
    return (
        <div>
            <div class="card">
  <div class="card-details">
    <p class="text-title">Card title</p>
    <img src={image} alt={title} />
    <p class="text-body">{healthScore}{typeDiet}</p>
  </div>
  <button class="card-button" onClick={recipe.id ? click : null}>Más información</button>
</div>
        </div>
    )
}

