import React from "react";
import { social } from "../data/icons&navbar";

const Icons = ({ classname }) => {
  return (
    <div>
      {social.map((socialIcon) => {
        const { id, url, icon } = socialIcon;
        return (
          <a key={id} href={url} className={classname} target="_blank">
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default Icons;
