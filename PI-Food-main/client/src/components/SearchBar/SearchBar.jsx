import { useDispatch } from "react-redux";
import {byNameApi} from "../../Redux/petitionsApi"
import style from "./search.css";
import swal from "sweetalert2";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBard() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [input, SetInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    byNameApi(dispatch, input).catch((err) => {
      swal({
        title: "Error!",
        text: `${err.response.data}`,
        icon: "error",
        button: "OK",
      });
    });
  };
  const handleChange = (e) => {
    SetInput(e.target.value);
   // apiAllbyname(dispatch, e.target.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        className={style.Bar}
        onChange={handleChange}
        placeholder="Search Recipe"
      />
    </form>
  );
}
