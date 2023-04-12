//import {Link} from "react-router-dom";
import React from "react";
//import Nav from "./Nav";
import Logo from "../Components/logo.png";
import '../App.css';

export default function Header(){
    return(
        <header>
            <img
            src={Logo}
            alt="logo"
            className="logo-image"/>
        </header>
    );
}