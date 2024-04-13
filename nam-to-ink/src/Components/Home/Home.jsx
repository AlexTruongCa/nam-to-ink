import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home" id="section-home">
      <div className="home-text">
        <h1>
          WE TRANSFORM YOUR TATTOO INTO MEMORIES THAT SPEAK LOUDER THAN WORDS
        </h1>
        <p>Empowering self-expression through the language of art</p>
        <button className="btn">
          <Link to="contact-me" smooth={true} offset={0} duration={500}>
            BOOK NOW
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
