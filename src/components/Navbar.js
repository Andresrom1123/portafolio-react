import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data/icons&navbar";
import { NavLink } from "react-router-dom";

const Navbar = ({ active }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linkscontainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkscontainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkscontainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav
      className={
        active &&
        "d-lg-flex py-3 px-5  bg-light justify-content-center align-items-center"
      }
    >
      <div>
        <div className="text-start">
          <button className="nav-toggle mb-2 border-0" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="links-container overflow-hidden" ref={linkscontainerRef}>
        <ul
          className="links justify-content-center text-black fs-6 px-0"
          ref={linksRef}
        >
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li className="list-group" key={id}>
                <NavLink
                  className={`text-decoration-none text-black pe-4 ps-md-2 text-start mb-3 mb-md-0`}
                  to={url}
                >
                  {({ isActive }) => (
                    <span className={isActive ? "active-btn " : undefined}>
                      {text}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
