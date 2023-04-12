//import {Link} from "react-router-dom";
import React from "react";
import '../App.css';
/*export default function Nav(props){
    return(
        <>
            <nav className={props.className}>
            </nav>
        </>
    );
}*/
const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About</a>
          </li>
          <li>
            <a href="index.html">Menu</a>
          </li>
          <li>
            <a href="index.html">Reservations</a>
          </li>
          <li>
            <a href="index.html">Order Online</a>
          </li>
          <li>
            <a href="index.html">Log In</a>
          </li>
        </ul>
      </nav>
    );
  };
  export default Nav;