import React from "react";
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <>
    <div className="home-sec" id="Home">
      <div className="container home-page">
        <div className="home-info">
          <p className="msg-welcome">Welcome All In My Portfolio</p>

          <div className="my-info">
            Hi! ,I'm Mahmoud Salah Elsebaey ,
            <TypeWriterEffect
              startDelay={10}
              cursorColor="#fff"
              multiText={[
                "FrontEnd Developer",
                "BackEnd Developer",
                "FullStack Developer",
              ]}
              multiTextDelay={1500}
              typeSpeed={150}
              multiTextLoop
            />
          </div>

          <p className="msg-info">
            Hello Everyone ,I have 3 years of Experience in Web Development
          </p>

          <h3 className="connect">
            Let's Connect{" "}
            <span>
              <i className="far fa-arrow-alt-circle-right"></i>
            </span>
          </h3>
        </div>
        <div className="home-img-moving"></div>
      </div></div>
    </>
  );
};

export default Home;
