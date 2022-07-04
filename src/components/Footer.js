import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="p-5 bg-black d-flex align-items-center flex-column footer">
      <Icons classname="text-white me-2 fs-2" />
      <p className="text-white mt-3">2022 - Andres Romero</p>
    </footer>
  );
};

export default Footer;
