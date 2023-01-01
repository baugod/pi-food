import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

export function LandingPage(){
    return (
        <div className = "landing">
        
            <h1 className="wlc">Bienvenidos a las Recetas de Bauti!</h1>
            <Link to= '/home'> 
            <button className="btn">A COCINAR!!</button>
            </Link>
        </div>
    )
}