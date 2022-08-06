import React from "react";
import PropTypes from "prop-types";

import { Button as StyledButton } from "./button.styled";

export const Button = ({ children, onClick, type = "button" }) => (
  <StyledButton onClick={onClick} type={type}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};
