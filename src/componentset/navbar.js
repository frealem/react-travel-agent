import {BrowserRouter as router,Routes,route,Link} from "react-router-dom"
import './navbar.css';
import React from "react";
import { useState } from "react";
export const Navbar=()=>{
    const[clicked,setClicked]=useState(false);

    const handleClick=()=>{
        setClicked(!clicked)
    }
return (
    <nav className="navbar">
    <h1 className="logo">Traveler</h1>
    <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
        <div className={clicked ? "navItem active": "navItem"}>
            <li><Link className="nav-link-home" to='/'><i class="fa fa-home" aria-hidden="true"></i></Link></li>
            <li><Link className="nav-link" to='/Service'>Booking</Link></li>
            <li><Link className="nav-link" to='/Contact'>Contact</Link></li>
            <li><Link className="nav-link" to='/About'>About</Link></li>
            <li><button className="nav-link-sign">sign Up</button> </li>
        </div>
    </nav>
)
}