import React from "react";

const Title = ({ title }) => {
  return (
    <div className="section-title text-center">
      <h2>{title || "deaut title"}</h2>
      <div className="underline mx-auto"></div>
    </div>
  );
};

export default Title;
