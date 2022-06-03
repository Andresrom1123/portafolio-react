import "../assets/styles/Experience.css";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { jobs } from "../data/experience&projects";
import Title from "./Title";

const Experience = () => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container d-flex justify-content-center flex-row flex-wrap flex-lg-column justify-content-lg-start">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn mb-2 ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4 className="bg-light fs-6">{company}</h4>
          <p className="job-date fs-5">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p className="text-body">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button
        type="button"
        className="btn-job-info mt-3 d-block mx-auto d-block"
      >
        <a
          className="text-center text-white text-decoration-none text-uppercase"
          href="/about"
        >
          more info
        </a>
      </button>
    </section>
  );
};

export default Experience;
