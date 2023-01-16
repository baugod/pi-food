import { useDispatch } from "react-redux";
import { apiAllbyname } from "../../Redux/petitionsApi";
import style from "./search.css";
import swal from "sweetalert2";
import { useState } from "react";

export default function SearchBard() {
  const dispatch = useDispatch();
  const [input, SetInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    apiAllbyname(dispatch, input).catch((err) => {
      swal({
        title: "Error!",
        text: `${err.response.data}`,
        icon: "error",
        button: "ok :(",
      });
    });
  };
  const handleChange = (e) => {
    SetInput(e.target.value);
   // apiAllbyname(dispatch, e.target.value);
  };
  return (
    <form className={style.form}>
      <input
        type="text"
        id="title"
        className={style.Bar}
        onChange={handleChange}
        placeholder="Search Recipe"
      />
      <button onSubmit={handleSubmit}>Search</button>
    </form>
  );
}

