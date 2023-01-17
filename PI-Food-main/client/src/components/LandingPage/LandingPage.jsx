import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

export function LandingPage(){
    return (
        <div className = "landing">
        
            <h1 className="wlc">Welcome!</h1>
            <Link to= '/home'> 
            <button className="btn">To cocking!!</button>
            </Link>
        </div>
    )
}