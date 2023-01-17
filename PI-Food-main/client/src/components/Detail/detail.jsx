import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  axios  from "../../Redux/axios.js";
import {Card} from "../Card/Card";
import LoaderFood from "../Loading/loading.jsx"

export default function Details() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/recipes/${id}`)
      .then((e) => setRecipe(e.data))
      .catch(() => {
        console.clear();
      })
      .then(() => navigate("/home"));
  }, [id, navigate]);

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div>
                <NavLink to="/home">Back</NavLink>
              </div>
              {recipe ? <Card recipe={recipe} /> : <LoaderFood />}
            </div>
            <div>
              <h2>{recipe?.title}</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
