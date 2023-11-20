import React from "react";
import "./About.css";
import aboutImg from "../../images/about.jpg";
import PDFButton from "../PDFButton";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");

      upToTop && upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Are you searching for a dynamic Junior Fullstack Developer to improve your team's capabilities? 
              Hi, I'm Abiodun, proficient in React, Node.js, ASP.NET, JavaScript, Responsive CSS, C#, Drupal, Webflow, and Shopify.
              </p>
              <p className="about__text p__color">
              If your company is grappling with the challenge of finding a junior developer who not only possesses technical prowess but also excels in communication, continuous learning, and quick adaptation, you're in the right place.
              </p>
              <p className="about__text p__color">
              I understand the struggle of businesses like yours—seeking a candidate who not only codes but communicates effectively, embraces continuous learning, and is a quick learner, ensuring they know exactly what they are doing.
              </p>
              <p className="about__text p__color">

              Look no further. I offer a comprehensive solution to your hiring needs. As a Junior Fullstack Developer, I bring a blend of technical expertise and a commitment to ongoing improvement. My skills encompass React, Node.js, ASP.NET, JavaScript, Responsive CSS, C#, Drupal, Webflow, and Shopify.
              </p>
              <p className="about__text p__color">
              By bringing me on board, you gain a team member who not only meets your technical requirements but also excels in communication, embraces continuous learning, and quickly adapts to new challenges.
              </p>
              <p className="about__text p__color">
              If you're wondering if such a versatile candidate exists, I'm here to prove that I do.
              </p>
              <p className="about__text p__color">

              </p>
             
              <div className="about__button d__flex align__items__center">
              <PDFButton />
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>

          {/* /// profile image */}

          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
