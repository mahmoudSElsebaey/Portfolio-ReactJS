import React from "react";
import ProjectCard from "./../ProjectCard";
import projImg1 from "../../../assets/projects-1.jpeg";
import projImg2 from "../../../assets/projects-2.jpeg";
import projImg3 from "../../../assets/projects-3.jpeg";
import projImg4 from "../../../assets/projects-4.jpeg";
import projImg5 from "../../../assets/projects-5.jpg";
import projImg6 from "../../../assets/projects-6.jpg";

const Section1 = () => {
  return (
    <>
      <div className="section1">
        <ProjectCard projectImg={projImg1} />
        <ProjectCard projectImg={projImg2} />
        <ProjectCard projectImg={projImg3} />
        <ProjectCard projectImg={projImg4} />
        <ProjectCard projectImg={projImg5} />
        <ProjectCard projectImg={projImg6} />
      </div>
    </>
  );
};
export default Section1;
