import React from "react";
import Image from "./Image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project -project-shadow">
      <Image image={image} classname="project-img" alt={title} />
      <div className="project-info">
        <span className="project-number d-inline-block fs-4 mb-2">
          0{index + 1}.
        </span>
        <h3 className="project-slug mb-3 fs-4">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack mb-2">
          {stack.map((item, index) => {
            return (
              <span
                className="py-1 px-2 d-inline-block text-uppercase m-1 fs-6 text-muted rounded shadow"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="project-links fs-4 ms-2">
          <a target="_blank" href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a target="_blank" href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
