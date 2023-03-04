import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
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
      <Banner />
      <Education />
      <Experience />
      <Skills />
      <Section />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;