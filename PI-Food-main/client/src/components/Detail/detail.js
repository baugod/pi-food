import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {axios} from "../../Redux/axios.js";
import Card from "../Card/Card.jsx";
import swal from "swalalert";

export default function Details() {
	const {id} = useParams();
	const [recipe, setRecipe] = useState(null);
	const navigate = useNavigate();
	useEffect(()=> {
		axios.get(`/recipes/${id}`).then((e)=> setRecipe(e.data)).catch((err)=> {
			console.clear();
			swal({
				title: "Error!",
				text: `${err.response.data}`,
				icon: "error",
				button: "Volver al inicio"
			}).then(()=>navigate("/home"));
		})
	}, [id]);

	return (
		<>
		<div className={StyleSheet.conteiner}>
			<div className={StyleSheet.details}>
				<div className={style.columns}>
					<div>
						<div className={style.listItem}>
							<NavLink to="/home">Back</NavLink>
						</div>
						{recipe?<Card recipe= {Card}/> : <Loading/>}
					</div>
					<div className={style.columns}>
						<h2 className={style.title}>{recipe?.title}</h2>
						<p className={style.text}></p>
					</div>	
				</div>
			</div>
		</div>
		</>
	)
}