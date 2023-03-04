import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Education />
      <Experience />
      <Banner />
      <Skills />
      <Section />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;