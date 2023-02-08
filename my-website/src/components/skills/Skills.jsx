import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

function Skills(props) {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container gird">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
