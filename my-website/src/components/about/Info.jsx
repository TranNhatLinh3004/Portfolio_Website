import React from "react";
import "./about.css";
import { useEffect, useState } from "react";

function Info(props) {
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
  // handleScroll();
  return (
    <div className="about__info gird" onScroll={() => {}}>
      <div className="about__box hidden">
        <i class="bx bx-award about__icon"></i>
        <div className="about__title">Experience</div>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      <div className="about__box hidden">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <div className="about__title"> Completed</div>
        <span className="about__subtitle">48 + Projects</span>
      </div>
      <div className="about__box hidden">
        <i class="bx bx-support about__icon"></i>
        <div className="about__title">Support</div>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
