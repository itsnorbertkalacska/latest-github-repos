import React from "react";

import { Button } from "../../components";
import { ErrorContainer } from "./error.styled";

const Error = ({ onRetry }) => (
  <ErrorContainer>
    <p>An error occured while fetching the repos. Please try again.</p>
    <Button onClick={onRetry}>Retry</Button>
  </ErrorContainer>
);

export default Error;
