import React from "react";

const Link = (props) => {
  const { name, link } = props.routes;
  return (
    <li className="mr-20">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
