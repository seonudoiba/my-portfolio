import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const NavItem = ({ item }) => {
    const links =
      item.name.toLowerCase() == "home" ||
      item.name.toLowerCase() == "articles";
  return (
    <>
      {links ? (
        <Link to={item.href} className="px-4 py-2">
          {item.name}
        </Link>
      ) : (
        <ScrollLink
          to={item.href}
          className="px-4 py-2 cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
        >
          {item.name}
        </ScrollLink>
      )}
    </>
  );
};
