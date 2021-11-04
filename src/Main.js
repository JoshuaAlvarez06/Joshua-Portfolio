import React from "react";
import "./Main.css";
import postgresql from "./images/postgresql.jpg";
import expressPng from "./images/express.png";
import welovemovies from "./images/WeLoveMovies.png";
import lashempress from "./images/lashempress.png";
import codersspot from "./images/codersspot.png";
import companySite from "./images/companysite.png";
import hero from "./images/hero.svg";
import { useForm, ValidationError } from "@formspree/react";
import { useHistory } from "react-router-dom";

export default function Main() {
  const history = useHistory();
  const [state, handleSubmit] = useForm("mknkepzn");
  if (state.succeeded) {
    history.push("/form-submitted");
  }

  return (
    <div className="container">
      <div id="main" className="main-section">
        <h1 className="main-title">Full Stack Developer</h1>
        <h2 className="main-subtitle">
          I create web applications, and I love what I do.
        </h2>
        <div style={{ marginTop: "20px" }}>
          <a
            href="https://www.linkedin.com/in/joshuaalvarez06"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/joshuaalvarez06"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
        </div>
        <img id="hero" src={hero} alt="hero" />
      </div>
      <div id="about" className="section primary-bg">
        <h2 className="section-title">Hi, I'm Joshua.</h2>
        <p className="section-text">
          I have been around technology all my life, and I have grown to have a
          deep love for it. Since beginning to code, it has become my passion.
          I, now, focus on full-stack development, focusing more on front-end
          using mainly Javascript and the React library. I am a very young,
          quick learner who is always looking to add more to my set of
          knowledge.
          <br />
          <br />
          When I am not on my computer, I spend my time working out and spending
          time with family.
        </p>
      </div>
      <div id="skills" className="skills-container section">
        <div className="skills">
          <h2 className="section-title lg-title">Skills</h2>
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
          <h2 className="section-title lg-title">More</h2>
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
                <img src={welovemovies} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">WeLoveMovies</h5>
                  <ul>
                    <li className="section-text">
                      Developed the backend portion of a web application using
                      several technologies.
                    </li>
                    <li className="section-text">
                      Created the PostgreSQL database from scratch and created
                      the REST API to be able to call it in the frontend portion
                      of the application.
                    </li>
                    <li className="section-text">
                      Built with Node.js, Express.js, PostgreSQL, Knex.js
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://welovemovies-frontend.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/WeLoveMovies.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={lashempress} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lash Empress LA</h5>
                  <ul>
                    <li className="section-text">
                      Created a real responsive website for a client using React
                      and custom CSS (no Bootstrap or framework). Used
                      JavaScript to add functionality.
                    </li>
                    <li className="section-text">
                      Used various reusable components and implemented the
                      Google Maps API.
                    </li>
                    <li className="section-text">
                      Built with React, JavaScript, HTML, CSS
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://lashempressla.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/lash-site.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={codersspot} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Coder's Spot</h5>
                  <ul>
                    <li className="section-text">
                      Developed a full-stack application from scratch in which
                      users can blog. Created the entire frontend, backend, and
                      the database with a larger focus on the backend.
                    </li>
                    <li className="section-text">
                      Implemented reusable components and a fully functional API
                      that can perform CRUD operations.
                    </li>
                    <li className="section-text">
                      Built with: Node.js, Express.js, PostgreSQL, React,
                      JavaScript, CSS
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://codersspot.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/blog-project.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={companySite} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Company Site</h5>
                  <ul>
                    <li className="section-text">
                      Developed a responsive, front-end application which can be
                      used as a sales site or a company website.
                    </li>
                    <li className="section-text">
                      Implemented styled components, React hooks, and
                      single-responsibility components. Used various animations
                      to enhance visuals.
                    </li>
                    <li className="section-text">
                      Built with: React, JavaScript, HTML, CSS
                    </li>
                  </ul>
                  <div className="button-group">
                    <a
                      href="https://companysite-ja.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/JoshuaAlvarez06/Sample-Website.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
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
            <label className="section-text" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-section">
            <label className="section-text" htmlFor="email">
              Email Address
            </label>
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
            <label className="section-text" htmlFor="body">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              rows="7"
              placeholder="Enter Text Here"
              required
            />
            <ValidationError prefix="Body" field="body" errors={state.errors} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
