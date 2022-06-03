import React from "react";

const Image = ({ image, classname, alt }) => {
  const ImageProject = require(`../assets/images/${image}`);
  return (
    <div
      className={`overflow-hidden position-relative d-inline-block ${classname}`}
    >
      <img
        src={ImageProject}
        alt={alt}
        style={{ transition: "opacity 500ms linear 0s" }}
      />
      ;
    </div>
  );
};

export default Image;
