import React from "react";
import { Link } from 'react-router-dom';
import './landingPage.css';


export function LandingPage() {
    return (
        <div className="landing">
            <h1 className="welcomeMsg">Estas preparado para la cocina?</h1>
            <Link to='/home' id="click">
                <button className="homeButton">A COCINAR!!</button>
            </Link>

        </div>
    );
    }