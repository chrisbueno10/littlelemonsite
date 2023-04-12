//import {Link} from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import '../App.css';

export default function Footer(){
    return(
        <footer className="footer">
            <img
                className="footer-image"
                src={require("../logo_footer.png")}
                alt="footer logo"
                />
            <div className="lnk-container">
                <div className="footer-contacts">
                    <ul>
                        <h3>Contact</h3>
                        <li>Address</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="footer-social-media">
                    <ul>
                        <h3>Social Media</h3>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Pinterest</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}