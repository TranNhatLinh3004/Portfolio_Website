import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

import { useState, useEffect } from "react";

function Skills(props) {
  let height = document.body.scrollHeight;
  const [scrollY, setHeight] = useState(height);
  window.addEventListener("scroll", () => {
    setHeight(document.body.scrollHeight);
  });

  useEffect(() => {
    handleScroll();

    // document.header.className = icon;
  }, [scrollY]);
  const handleScroll = () => {
    console.log("hihihihihihihihiihihihih");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    let hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((el) => observer.observe(el));
  };

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container gird hidden">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
