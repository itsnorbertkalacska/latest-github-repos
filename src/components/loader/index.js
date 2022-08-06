import React from "react";
import PropTypes from "prop-types";

import { LoaderMessage } from "./loader.styled";

export const Loader = ({ children, isLoading }) => {
  if (isLoading) {
    return <LoaderMessage>Loading...</LoaderMessage>;
  }

  return children;
};

Loader.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool,
};
