import React from "react";
import Title from "../components/Title";
import ImageMe from "../assets/images/me.webp";

const About = () => {
  const stack = ["html", "css", "python", "js"];
  return (
    <section className="px-5 -section d-flex flex-column flex-lg-row">
      <div className="col-12 col-lg-6">
        <img src={ImageMe} alt="about me" style={{ width: "100%" }} />
      </div>
      <div className="col-12 col-lg-6">
        <Title title="about me" />
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi
          quia, quos doloremque tenetur ipsam! Aspernatur nemo quo ipsa eligendi
        </p>
        <div>
          {stack.map((item, index) => {
            return (
              <span
                key={index}
                className="rounded shadow mx-2 p-2 text-uppercase text-muted my-lg-0 d-inline-block"
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
