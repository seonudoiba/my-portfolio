import React from "react";
import "./Project.css";
import Project1 from "../../assets/portfolio-1.png";
import Project2 from "../../assets/portfolio-2.png";
import Project3 from "../../assets/portfolio-3.png";
import Project4 from "../../assets/portfolio-4.png";
import Project5 from "../../assets/portfolio-5.png";
import Project6 from "../../assets/portfolio-6.png";
import CardImg from "../CardImg";

function Project() {
  const projects = [
    {
      toText: "Software Solution Application",
      toLink: "https://digitalproductivity.sa/",
      toImg: Project1,
    },
    {
      toText: "MERN Application",
      toLink: "https://cryptoinvestospage.vercel.app/",
      toImg: Project2,
    },
    {
      toText: "Webflow and Javascript",
      toLink: "https://www.freelo.media/",
      toImg: Project3,
    },
    {
      toText: "BULLISH GREEN ACADEMY",
      toLink: "https://bugacademy.vercel.app/",
      toImg: Project4,
    },
    {
      toText: "Digital Agency",
      toLink: "https://backlinkedge.vercel.app/",
      toImg: Project5,
    },
    {
      toText: "MERN Application Skeleton",
      toLink: "",
      toImg: Project6,
    },
  ];
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading text-white">My Latest Projects</h1>
        <p className="heading p__color">
          Here are some of the exiting projects I have worked on recently.
        </p>
        <p className="heading p__color">Want to see more? Email me.</p>
      </div>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col__3">
              <CardImg
                toImg={project.toImg}
                toLink={project.toLink}
                toText={project.toText}
              />
            </div>
          ))}

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
