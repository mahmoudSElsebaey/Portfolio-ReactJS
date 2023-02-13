import "./App.css";
import NavbarSec from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Skills from "./Component/Skills/Skills";
import Projects from "./Component/Projects/Projects";
import Connect from "./Component/Connect/Connect";
import Email from "./Component/Email/Email";
import Footer from "./Component/Footer/Footer";
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
        <NavbarSec />
        <Home />
        <Skills />
        <Projects />
        <Connect />
        <Email />
        <Footer />
      </div>
    
    </>
  );
}

export default App;
