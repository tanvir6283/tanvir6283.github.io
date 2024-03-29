import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Section} from "../components/Section.js";

export const Experience=()=> {
  return (
    <Section className="experience" id="experience">
      <div className="experience1">
      <div className="experience">
        <div className="flex-grow-1">
          <h1 className="exp1">Experience</h1><br/><br />
          <h3 className="mb-0">Software Quality Assurance Engineer</h3>
          <div className="subheading mb-3">TigerIT Bangladesh Ltd.</div>
          <p>
              <li>CommChat- QA Team, Software and Services</li>
        </p>
        </div>
        <div className="exp">
          <span className="text-primary">14th August 2022 to Present</span><br /><br />
        </div>
      </div>
      <div className="experience">
        <div className="flex-grow-1">
          <h3 className="mb-0">Maintenance Engineer</h3>
          <div className="subheading mb-3">Beximco Group</div>
          <p>
            <li>1. Ensuring safety for the electrical equipment- transformer, generator, water pump, etc.</li>
            <li>2. Preparing SOP for the maintenance of the elevator and maintaining it.</li>
            <li>3. Operation, Maintenance and Troubleshooting of utility systems.</li>
            <li>4. Manpower planning & task planning for the execution of project work.</li>
            <li>5. Dealing with vendors and preparing required BOQ.</li>
            <li>6. Executing electrical installation work according to the drawing.</li>
            <li>7. Identifying the problem in the project and developing a better solution.</li>
            <li>8. Maintaining the store inventory and spares and financial planning for the operational expenditure.</li>
            <li>9. Developed an Automated Room Assigning Software using VBA code and Macro in Microsoft Excel.</li>
            <li>10. Developed a Store Inventory Management Software using Microsoft Excel (Macro and VBA Code).</li>
            <li>11. Developed an Automated Invoice Software for Accounts Department..</li>
            </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">15th August 2021 to 1st August 2022</span><br /><br /><br />
        </div>
      </div>
      <div className="experience">
        <div className="flex-grow-1">
          <h3 className="mb-0">Intern Engineer- Automation Department</h3>
          <div className="subheading mb-3">Consultant BD</div>
          <p>
            <li>1. Designing and analyzing Substation Capacity.</li>
            <li>2. Working on Power Factor Improvement.</li>
            <li>3. Switchgear Operation.</li>
           </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">9th January 2019 to 25th December 2019</span><br />
        </div>
      </div>
      </div>
    </Section>
  );
}