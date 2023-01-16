import React from 'react';
import { Link } from 'react-router-dom';
import SearchBard from '../SearchBar/SearchBar';
import './NavBar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
            <Link to="/" />
                </div>
                <div>
                    <SearchBard/>
                </div>
                <div className='title'>Bauti's recipes</div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/home" >All Recipes
                        </Link>
                        <Link to="/recipe" >Create new Recipe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}