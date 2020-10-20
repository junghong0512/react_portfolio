import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiGithub } from "react-icons/fi";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              Portfolio
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/facebook" className="btn-link">
                    <Button buttonStyle="btn--outline">
                      <FiFacebook className="btn-icon" />
                      acebook
                    </Button>
                  </Link>
                ) : (
                  <Link to="/facebook" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      <FiFacebook />
                      acebook
                    </Button>
                  </Link>
                )}
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/facebook" className="btn-link">
                    <Button buttonStyle="btn--outline">
                      i<FiInstagram />
                      stagram
                    </Button>
                  </Link>
                ) : (
                  <Link to="/facebook" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      i<FiInstagram />
                      stagram
                    </Button>
                  </Link>
                )}
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/facebook" className="btn-link">
                    <Button buttonStyle="btn--outline">
                      git
                      <FiGithub />
                      ub
                    </Button>
                  </Link>
                ) : (
                  <Link to="/facebook" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      git
                      <FiGithub />
                      ub
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
