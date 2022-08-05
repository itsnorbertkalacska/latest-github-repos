import React from "react";

export const Link = ({ children, href, isExternal, target }) => {
  return (
    <a
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={target || (isExternal ? "_blank" : undefined)}
    >
      {children}
    </a>
  );
};
