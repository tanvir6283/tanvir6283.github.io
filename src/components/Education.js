import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Section} from "../components/Section.js";

export const Education = ()=> {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Section className="education" id="education">
      <div className="education1">
        <div className="flex-grow-1">
          <h1 className="edu1">Education</h1><br /><br />
          <h3 className="mb-0">Military Institute of Science & Technology</h3>
          <div className="subheading mb-3">BSc Engineering in Electrical, Electronics & Communication Engineering (EECE)</div>
          <div>Mirpur Cantonment, Dhaka</div>
          
                  </div>
        <div className="flex-shrink-0">
          <span className="text-primary">July 2019 - Present</span>
        </div>
      </div>
    </Section>
  );
}