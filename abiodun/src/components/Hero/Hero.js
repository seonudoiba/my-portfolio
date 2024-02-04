import React, {useState} from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="home" id="Home">
      <div className="home__bg">   
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">YOU'RE WELCOME TO MY PAGE</h1>
              <h2 className="home__text text-white pz__10">Hi, I’m Abiodun Igbehinadun</h2>
              <h3 className="home__text sweet pz__10">Fullstack Developer.</h3>
              <h4 className="home__text text-white pz__10">based in Abeokuta, Nigeria.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
