import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";

function Home(props) {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content gird">
            <Social />
            <div className="home__img"></div>

            <Data />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
