import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../components";
import { ErrorContainer } from "./error.styled";

const Error = ({ onRetry }) => (
  <ErrorContainer>
    <p>An error occured while fetching the repos. Please try again.</p>
    <Button onClick={onRetry}>Retry</Button>
  </ErrorContainer>
);

Error.propTypes = {
  onRetry: PropTypes.func,
};

export default Error;
