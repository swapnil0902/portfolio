import React, { useState } from "react";
import Logo from "../assets/logo-white.png";
import { HashLink as Link } from "react-router-hash-link";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <img className="logo" src = {Logo} alt = "IntroImg" />
        </Link>
        <ul className={click ? "nav-men active": "nav-men"}>
            <li>
                <Link to="#home">Home</Link>
            </li>
            <li>
                <Link to="#about">About</Link>
            </li>
            <li>
                <Link to="#project">Project</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "#fff"}} />
            ):(
            <FaBars size={20} style={{color: "#fff"}} />
            )}
            
            
        </div>
    </div>
  )
}

export default Navbar