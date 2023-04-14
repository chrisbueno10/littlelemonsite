import {Link} from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/" target="_blank">About</a>
          </li>
          <li>
            <a href="/" target="_blank">Menu</a>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <a href="/" target="_blank">Order Online</a>
          </li>
          <li>
            <a href="/" target="_blank">Log In</a>
          </li>
        </ul>
      </nav>
    );
  };
  export default Nav;