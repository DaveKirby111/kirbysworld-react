import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import dk from "../../images/dk-2.png";

const Layout = ({ children, page }) => {
  const storedMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(storedMode || "light");

  const toggleDark = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    if (storedMode) {
      setMode(storedMode);
    }
  }, [storedMode]);

  return (
    <div className={`${mode}`}>
      <div className="layout container-fluid d-flex flex-column min-vh-100 flex-wrap p-0 m-0">
        <header>
          <div className="banner d-flex align-items-center w-100">
            <Link to="/" className="nav-link logo">
              <img src={dk} alt="logo" height={"100px"} width={"200px"} />
            </Link>

            <div className="switch-checkbox ms-5">
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faSun}
                  className={`me-2 ${mode === "light" ? "sun-light" : ""}`}
                />
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={mode === "dark"}
                  onChange={toggleDark}
                />
                <span className="slider round"></span>
              </label>

              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faMoon}
                  className={`ms-2 ${mode === "dark" ? "moon-dark" : ""}`}
                />
              </div>
            </div>

            <Nav mode={mode} />
          </div>
          <h1 className="text-white w-75 mx-auto mt-2">{page}</h1>
        </header>

        <main className="flex-grow-1">{children}</main>

        <footer className="d-flex">
          <div className="email w-25 text-center d-flex justify-content-center align-items-center">
            <h4 className="text-capitalize">
              <a
                href="mailto:davidkirby225@gmail.com"
                className={`text-decoration-none ${
                  mode === "dark" ? "nav-link-dark" : "nav-link-light"
                }`}
              >
                <i className="icon fas fa-envelope" />
                email
              </a>
            </h4>
          </div>
          <div className="info w-50 text-center">
            {" "}
            <p className="author mt-4">David Kirby 2023</p>
          </div>
          <div className="social w-25 d-flex justify-content-center align-items-lg-center">
            <a
              href="https://www.linkedin.com/in/david-kirby-64a1487a/"
              rel="noreferrer"
              target="_blank"
              className="linked"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/DaveKirby111?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
