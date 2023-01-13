import React from 'react';
import { Link } from 'react-router-dom';
import SearchBard from '../SearchBar/SearchBar';
import './NavBar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
            <Link to="/" />
                </div>
                <div>
                    <SearchBard/>
                </div>
                <div className='title'>Las recetas de Bauti</div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/home" >Todas las recetas</Link>
                        <Link to="/recipe" >Crear nueva receta</Link>
                        {/* <Link to="/about" >About</Link> */}
                    </li>
                </ul>
            </nav>
        </div>
    )
}