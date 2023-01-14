import React from "react";
import Title from "../components/Title";
import AboutComponent from "../components/About";
import ImageMe from "../assets/images/me.webp";

const About = () => {
  return (
    <section className="px-5 -section d-flex flex-column flex-lg-row">
      <div className="col-12 col-lg-6">
        <img src={ImageMe} alt="about me" style={{ width: "100%" }} />
      </div>
      <div className="col-12 col-lg-6">
        <Title title="about me" />
        <AboutComponent />
      </div>
    </section>
  );
};

export default About;
