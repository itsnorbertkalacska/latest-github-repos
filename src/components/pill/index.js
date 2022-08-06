import React from "react";

import { PillContainer } from "./pill.styled";

export const Pill = ({ label }) => (
  <PillContainer>
    <p>{label}</p>
  </PillContainer>
);
