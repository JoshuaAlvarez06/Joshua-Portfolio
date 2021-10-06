import React from 'react';
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <h2>Find Me Here</h2>
            <div className="socials">
                <a href="https://github.com/JoshuaAlvarez06" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/joshuaalvarez06" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-linkedin"></i></a>
                <a href="mailto: joshuaialvarez06@gmail.com" target="_blank" rel="noopener noreferrer" className="social"><i className="far fa-envelope"></i></a>
            </div>
        </div>
    )
}