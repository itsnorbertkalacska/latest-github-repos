import React from "react";
import PropTypes from "prop-types";

import { PillContainer } from "./pill.styled";

export const Pill = ({ label }) => (
  <PillContainer>
    <p>{label}</p>
  </PillContainer>
);

Pill.propTypes = {
  label: PropTypes.string.isRequired,
};
