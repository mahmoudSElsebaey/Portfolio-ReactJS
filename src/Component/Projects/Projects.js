import React from "react";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Section1 from "./ProjectsSections/Section1";
import Section2 from "./ProjectsSections/Section2";
import Section3 from "./ProjectsSections/Section3";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-page container" id="Projects">
          <div className="projects-title">
            <h3>My Projects</h3>
            <p>
              my name is mahmoud , i live in menoufia , this is the 10th
              projects in the react
            </p>
          </div>

          <ButtonGroup className="projects-links">
            <Button as={Link} to="sec1" className="btn">
              1st Section
            </Button>
            <Button as={Link} to="sec2" className="btn">
              2nd Section
            </Button>
            <Button as={Link} to="sec3" className="btn">
              3rd Section
            </Button>
          </ButtonGroup>
          {/* <nav className="projects-links"></nav> */}

          <div className="sections">
            <Routes>
              <Route path="/sec1" element={<Section1 />} />
              <Route path="/sec2" element={<Section2 />} />
              <Route path="/sec3" element={<Section3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
