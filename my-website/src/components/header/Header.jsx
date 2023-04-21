import React, { useEffect, useState } from "react";
import "./header.css";
function Header(props) {
  const [theme, setTheme] = useState("light-theme");
  const [selectedIcon, setSelectedIcon] = useState("uil uil-moon change__bg");

  // uil - sun;
  const [Toggle, showMenu] = useState(false);
  const handleClick = () => {
    setSelectedIcon(
      selectedIcon === "uil uil-moon change__bg"
        ? "uil uil-sun change__bg"
        : "uil uil-moon change__bg"
    );
  };
  const toggleTheme = () => {
    console.log("hi");
    handleClick();

    // theme === "dark-theme"
    //   ? setTheme("light-theme")
    //   : // setIcon("uli-moon");
    //     setTheme("dark-theme");
    // // setIcon("uil-sun");
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
    // document.header.className = icon;
  }, [theme]);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            ANH DEV
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
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>{" "}
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#testimonial" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>

            <i
              class="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <i className={selectedIcon} onClick={() => toggleTheme()}></i>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
