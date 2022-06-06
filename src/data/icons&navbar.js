import React from "react";
import { FaLinkedinIn, FaHackerrank, FaGithubSquare } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/andres-romero-069b961a8/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    url: "https://www.hackerrank.com/amclres",
    icon: <FaHackerrank />,
  },
  {
    id: 3,
    url: "https://github.com/Andresrom1123",
    icon: <FaGithubSquare />,
  },
];
