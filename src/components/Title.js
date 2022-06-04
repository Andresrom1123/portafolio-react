import React from "react";

const Title = ({ title, center }) => {
  return (
    <div className={`section-title ${center && "text-center"}`}>
      <h2>{title || "default title"}</h2>
      <div className={`underline ${center && "mx-auto"}`}></div>
    </div>
  );
};

export default Title;
