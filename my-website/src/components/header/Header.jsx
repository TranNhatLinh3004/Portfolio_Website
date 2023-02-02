import React, { useState } from "react";
import "./header.css";
function Header(props) {
  const [Toggle, showMenu] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Anh Dev
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list gird">
              <li className="nav__item ">
                <a href="#home" className="nav__link active__link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>About
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Skills
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#Contact" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i
              class="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            I
            <i class="uil uil-apps" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
