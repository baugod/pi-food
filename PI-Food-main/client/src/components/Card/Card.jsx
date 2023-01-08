import React from 'react';
import { Link } from 'react-router-dom';
import './CardSyle.css'

export default function Card({id, title, image, diets}) {
	const getDiets = function () {
		let arrayDiets = [];
		if (diets) {
			for(let diet of diets) {
				typeof diet === 'object' ? arrayDiets.push(diet.name) : arrayDiets.push(diet);
			}
		}
		return arrayDiets.length ? arrayDiets.join(', ') : 'Diets Not Found!'
	}
	return (
		<React.Fragment>
			<Link to={`/recipes/${id}`} className='card'>
				<div className='img-recipe'>
					<img src={image || 'https://media.giphy.com/media/lGbz7CsaCj4Tm/giphy.gif'} alt={title}/>
				</div>
					<div className='card-info'>
	                	<h2 className='card-title'>{title}</h2>
						<h4 className='card-diets'>{getDiets()}</h4>
					</div>
			</Link>
    	</React.Fragment>
	)
}