import React from "react";
import Title from "../components/Title";
import ImageMe from "../assets/images/me.webp";

const About = () => {
  const stack = ["html", "css", "python/django", "js/react"];
  return (
    <section className="px-5 -section d-flex flex-column flex-lg-row">
      <div className="col-12 col-lg-6">
        <img src={ImageMe} alt="about me" style={{ width: "100%" }} />
      </div>
      <div className="col-12 col-lg-6">
        <Title title="about me" />
        <p className="mb-5">
          My professional goal is to become a backend web developer. I have
          extensive project experience with Python and Js, specifically using
          Django and React as a framework.
        </p>
        <div>
          {stack.map((item, index) => {
            return (
              <span
                key={index}
                className="rounded shadow m-2 p-2 text-uppercase text-muted my-lg-0 d-inline-block"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
