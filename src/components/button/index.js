import React from "react";

export const Button = ({ children, onClick, type = "button" }) => (
  <button onClick={onClick} type={type}>
    {children}
  </button>
);
