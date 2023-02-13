import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavbarSec = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/**/}
      <Navbar
        expand="lg"
        id="navbar"
        variant="dark"
        className={scrolled ? "scrolled" : ""}
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#" className="navbar-logo">
            LOGO
          </Navbar.Brand>
          {/* <span className="navbar-toggler-icon"></span> */}
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              className=" my-2 my-lg-0 navbar-links"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
            </Nav>

            <div className="navbar-connect">
              <div className="social-icons ">
                <a
                  href="https://www.facebook.com/hoodaa11?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-elsebaey-888797223/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <a href="#connect">
              <button className="navbar-btn">Let's Connect</button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarSec;
