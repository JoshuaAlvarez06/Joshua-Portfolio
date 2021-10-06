import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    const [navModalVisible, setNavModalVisible] = useState(false);

    return (
        <div className="header">
            <h1 id="#" className="logo"><a href="/"><i className="fas fa-laptop-code fa-xs"></i></a></h1>
            <ul className="menu-items">
                <li className="menu-item"><Link to="#">Home</Link></li>
                <li className="menu-item"><a href="#skills">Skills</a></li>
                <li className="menu-item"><a href="#projects">Projects</a></li>
                <li className="menu-item-button" style={{marginRight: "15px"}} ><a href="#contact">Get In Touch</a></li>
                <li className="menu-item-button" ><a href="https://drive.google.com/file/d/1e3_lTBFrJ3dKa8LEWCrcKcpVtAXKfrfm/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
            <div className="hamburger" onClick={() => setNavModalVisible(true)}>
                <div className="bar"></div>
                <div className="bar spacer"></div>
                <div className="bar"></div>
            </div>
            {navModalVisible && (
                <div className="mobile-nav" onClick={() => setNavModalVisible(false)}>
                <div onClick={() => setNavModalVisible(false)}>
                    <i className="fas fa-times x"/>
                </div>
                <ul className="menu-items-mobile">
                    <li className="menu-item"><Link to="#">Home</Link></li>
                    <li className="menu-item"><a href="#skills">Skills</a></li>
                    <li className="menu-item"><a href="#projects">Projects</a></li>
                    <li className="menu-item-button" style={{marginBottom: "15px"}}><a href="#contact">Get In Touch</a></li>
                    <li className="menu-item-button"><a href="https://drive.google.com/file/d/1e3_lTBFrJ3dKa8LEWCrcKcpVtAXKfrfm/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
                </div>
             )}
        </div>
    );
};