import React from "react";

import { Button as StyledButton } from "./button.styled";

export const Button = ({ children, onClick, type = "button" }) => (
  <StyledButton onClick={onClick} type={type}>
    {children}
  </StyledButton>
);
