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
    url: "",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    url: "",
    icon: <FaHackerrank />,
  },
  {
    id: 3,
    url: "",
    icon: <FaGithubSquare />,
  },
];
