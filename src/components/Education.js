import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
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