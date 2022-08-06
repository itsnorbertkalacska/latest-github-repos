import React from "react";

import { Link as StyledLink } from "./link.styled";

export const Link = ({ children, href, isExternal, target }) => {
  return (
    <StyledLink
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={target || (isExternal ? "_blank" : undefined)}
    >
      {children}
    </StyledLink>
  );
};
