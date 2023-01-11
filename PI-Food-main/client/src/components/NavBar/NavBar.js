import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
            <Link to="/" />
                </div>
                <SearchBar />
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/home" >Todas las recetas</Link>
                        <Link to="/recipe" >Crear nueva receta</Link>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}