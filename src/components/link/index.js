import React from "react";
import PropTypes from "prop-types";

import { Link as StyledLink } from "./link.styled";

export const Link = ({ children, href, isExternal = false, target }) => (
  <StyledLink
    href={href}
    rel={isExternal ? "noreferrer" : undefined}
    target={target || (isExternal ? "_blank" : undefined)}
  >
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top", "framename"]),
};
