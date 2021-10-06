import React from "react";
import "./Main.css";
import postgresql from "./images/postgresql.jpg";
import expressPng from "./images/express.png";
import thinkfulbnb from "./images/thinkfulbnb.png";
import pomodorotimer from "./images/pomodorotimer.png";
import flashcardomatic from "./images/flashcardomatic.png";
import hero from "./images/hero.svg";
import { useForm, ValidationError } from '@formspree/react';
import { useHistory } from "react-router-dom";


export default function Main() {
  const history = useHistory();
  const [state, handleSubmit] = useForm("mknkepzn");
  if (state.succeeded) {
      history.push("/form-submitted")
  }
  
  return (
    <div className="container">
      <div id="main" className="main-section">
        <h1 className="main-title">Front End Developer</h1>
        <h2 className="main-subtitle">
          I create web applications, and I love what I do.
        </h2>
        <img id="hero" src={hero} alt="hero" />
      </div>
      <div id="about" className="section primary-bg">
        <h2 className="section-title">Hi, I'm Joshua.</h2>
        <p className="section-text">
          I have been around technology all my life, and I have grown to have a
          deep love for it. Since beginning to code, it has become my passion.
          I, now, focus on front-end development using mainly Javascript and the
          React library. I am a quick learner who is always looking to add more
          to my set of knowledge.
          <br />
          <br />
          When I am not on my computer, I spend my time working out and spending
          time with family.
        </p>
      </div>
      <div id="skills" className="skills-container section">
        <div className="skills">
          <h2 className="section-title lg-title">Front End Skills</h2>
          <div className="skill-section">
            <i className="fab fa-react skill"></i>
            <p className="section-text">React</p>
          </div>
          <div className="skill-section">
            <i className="fab fa-js skill"></i>
            <p className="section-text">JavaScript</p>
          </div>
          <div className="skill-section">
            <i className="fab fa-css3-alt skill"></i>
            <p className="section-text">CSS3</p>
          </div>
          <div className="skill-section">
            <i className="fab fa-html5 skill"></i>
            <p className="section-text">HTML5</p>
          </div>
        </div>
        <div className="other-skills">
          <h2 className="section-title lg-title">Other</h2>
          <div className="skill-section">
            <i className="fab fa-git-square skill"></i>
            <p className="section-text">Git</p>
          </div>
          <div className="skill-section">
            <i className="fab fa-node skill"></i>
            <p className="section-text">Node.js</p>
          </div>
          <div className="skill-section">
            <img
              className="express-image"
              src={expressPng}
              alt="Express.js Logo"
            />
            <p className="section-text">Express.js</p>
          </div>
          <div className="skill-section">
            <img
              className="skills-image"
              src={postgresql}
              alt="PostgreSQL Logo"
            />
            <p className="section-text">PostgreSQL</p>
          </div>
        </div>
      </div>
      <div id="projects" className="section primary-bg">
        <h2 className="section-title lg-title">Projects</h2>
        <div className="projects">
          <div className="project-section">
            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={flashcardomatic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Flashcard-O-Matic</h5>
                  <ul>
                    <li className="section-text">
                      Developed a full-stack application in which users can
                      create, edit, and study their own flashcards.
                    </li>
                    <li className="section-text">
                      Implemented read-only props, React hooks, and
                      single-responsibility components.
                    </li>
                    <li className="section-text">
                      Built with: React, JavaScript, HTML, CSS
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://github.com/JoshuaAlvarez06/Thinkful--Flashcards.git"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/Thinkful--Flashcards.git"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={pomodorotimer} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pomodoro Timer</h5>
                  <ul>
                    <li className="section-text">
                      Developed a pomodoro timer which allows users to set a
                      period of study time and break time in order to break work
                      into intervals using React Router and React hooks.
                    </li>
                    <li className="section-text">
                      Implemented state and various functional components.
                    </li>
                    <li className="section-text">
                      Built with React, JavaScript, HTML, CSS
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://pomodoro-timer-ja.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/Thinkful--Pomodoro-Timer.git"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={thinkfulbnb} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ThinkfulBnb</h5>
                  <ul>
                    <li className="section-text">
                      Developed a web app using mobile-first development
                      strategies.
                    </li>
                    <li className="section-text">
                      Implemented media queries and styling to seamlessly allow
                      for cross-platform use of the application.
                    </li>
                    <li className="section-text">Built with HTML, CSS</li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://joshuaalvarez06.github.io/Thinkful---Thinkfulbnb/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/Thinkful---Thinkfulbnb.git"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="section-text" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="form-section">
            <label className="section-text" htmlFor="email">Email Address</label>
            <input
              type="email"
              name="name"
              id="exampleInputEmail1"
              placeholder="Email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-section">
            <label className="section-text" htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              placeholder="Enter Text Here"
              required
            />
            <ValidationError 
              prefix="Body" 
              field="body"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
