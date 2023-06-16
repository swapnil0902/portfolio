import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src = {IntroImg} alt = "IntroImg" />
        </div>
        <div className="content">
            <h1>SWAPNIL DUTTA</h1>
            <p>Student</p>
            <div>
                <Link to="#project" className="btn">Projects</Link>
                <Link to="https://drive.google.com/file/d/131Oyc3C4_kLJuEpJymx49nTmPHtxwRth/view?usp=sharing" className="btn btn-light">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;