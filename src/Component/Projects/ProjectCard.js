import React from "react";

const ProjectCard = ({ projectImg }) => {
  return (
    <>
      <div className="project-card">
        <img src={projectImg} alt="project-image" />
        <div className="overlay"></div>
        <div className="overlay-text">
          <h3>Busniess Startup</h3>
          <p>Design & Development</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
