import style from "./detail.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../Redux/axios";
import {Card} from "../../components/Card/Card.jsx";
import Loading from "../../components/Loading/loading";
import swal from "sweetalert2";

export default function Details() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/recipes/${id}`)
      .then((e) => setRecipe(e.data))
      .catch((err) => {
        console.clear();
        swal({
          title: "Error!",
          text: `${err.response.data}`,
          icon: "error",
          button: "Volver al Inicio!",
        }).then(() =>
          navigate("/home")
        );
      });
  }, [id]);

  return (
    <>
      <div className={style.container}>
        <div className={style.details}>
          <div className={style.columns}>
            <div>
              <div className={style.listItem}>
                <NavLink to="/home"> 🢀 Back </NavLink>
              </div>
              {recipe ? <Card recipe={recipe} /> : <Loading />}
            </div>
          </div>
          <div className={style.columns}>
            <h2 className={style.name}>{recipe?.title}</h2>
            <p className={style.text}>
              These dogs can weight between <strong>{recipe?.healthScore}</strong> kg.
            </p>
            <p className={style.text}>
              And measure between <strong>{recipe?.diets}</strong> cm.
            </p>
            <p className={style.text}>
              Their average age is between <strong>{recipe.healthScore}</strong>
            </p>
            <p className={style.text}>Their diets are: </p>
            <p className={style.text}>
              {" "}
              <strong>{recipe?.summary}</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}