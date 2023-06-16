import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from 'react';

import { FaCopyright } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import { SiGmail } from "react-icons/si"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="copyright">
                    <FaCopyright size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Swapnil Dutta, 2023</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="social">
                    <Link to="https://github.com/swapnil0902"><SiGithub size={30} style={{ color:"#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://www.linkedin.com/in/swapnil-dutta-1806761b7/"><SiLinkedin size={30} style={{ color:"#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://www.facebook.com/swapnil.dutta.965"><SiFacebook size={30} style={{ color:"#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://instagram.com/_.unfocussed_lens?igshid=MzRlODBiNWFlZA=="><SiInstagram size={30} style={{ color:"#fff", marginRight: "2rem"}} /></Link>
                    <Link to="mailto:swadutt5@gmail.com"><SiGmail size={30} style={{ color:"#fff", marginRight: "2rem"}} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer;

