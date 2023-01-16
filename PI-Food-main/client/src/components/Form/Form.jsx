import "./FormStyle.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { apiPostRecipe } from "../../Redux/petitionsApi";
import Diets from "./Diets"
export default function Form() {
  const [newRecipe, setNewRecipe] = useState(
    {
      title: "",
      image: "",
      summary: "",
      healthScore: "",
      diets: [],
      analyzedInstruction: "",
    },
    []
  );

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    apiPostRecipe(newRecipe);
  };

  const handelChangeSelect = (e) => {
    const { value } = e.target;
    if (newRecipe.diets.includes(value + " ")) return;
    setNewRecipe({
      ...newRecipe,
      diets: [value + " ", ...newRecipe.diets.splice(0, 2)],
    });
  };

  
  return (
    <>
    <br></br>
    <div className="form">

      <div className="container">
        <div>
          <div className="button-back">
            <NavLink to="/home"> 🢀 Back </NavLink>
          </div>
        </div>
        <div classN="columns">
          <h2 className="temps">Create Recipe</h2>
          <div className="">
            <form onSubmit={handelSubmit}>
              <label>Title</label>
              <br />
              <input
                className="input"
                id="titleInput"
                type="text"
                name="title"
                value={newRecipe.title}
                onChange={handleChangeInput}
              />
              <div>
                <label>Image</label>
                <br />
                <input
                className="input"
                  id="imgInput"
                  type="text"
                  name="image"
                  value={newRecipe.image}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label>Summary</label>
                <br />
                <input
                className="input"
                  id="summaryInput"
                  type="text"
                  name="summary"
                  value={newRecipe.summary}
                  onChange={handleChangeInput}
                />
                <div>
                  <br />
                  <div>
                    <label>Health Score</label>
                    <br />
                    <input
                    className="input"
                      id="input"
                      type="text"
                      name="healthScore"
                      value={newRecipe.healthScore}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <br />
                  <label>Diets</label>
                  <br />
                  <select className="input" name="diets" onChange={handelChangeSelect}>
                    <option >
                      Select diets :
                    </option>
                    <option name="gluten free" value="gluten free">
                      Gluten free
                    </option>
                    <option name="ketogenic" value="ketogenic">
                      Ketogenic
                    </option>
                    <option name="vegetarian" value="vegetarian">
                      Vegetarian
                    </option>
                    <option name="vegan" value="vegan">
                      Vegan
                    </option>
                    <option name="lacto vegetarian" value="lacto vegetarian">
                      Lacto-vegetarian
                    </option>
                    <option
                      name="lacto ovo vegetarian"
                      value="lacto ovo vegetarian"
                    >
                      Lacto ovo vegetarian
                    </option>
                    <option name="pescatarian" value="pescatarian">
                      Pescatarian
                    </option>
                    <option name="paleolithic" value="paleolithic">
                      Paleolithic
                    </option>
                    <option name="primal" value="primal">
                      Primal
                    </option>
                    <option name="whole 30" value="whole 30">
                      Whole 30
                    </option>
                  </select>
                  <Diets
                    diet={newRecipe.diets}
                    setDiets={setNewRecipe}
                    newRecipe={newRecipe}
                  />
                  <br />
                  <label>Analyzed instruction</label>
                  <br />
                  <textarea
                
                    id="insInput"
                    type="text"
                    className=""
                    value={newRecipe.analyzedInstruction}
                    name="analyzedInstruction"
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <button onClick={handelSubmit} className="button">Create Recipe</button>
            </form>
          </div>
        </div>
      </div>
                    </div>
    </>
  );
}

