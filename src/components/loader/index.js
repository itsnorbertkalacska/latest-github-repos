import React from "react";

import { LoaderMessage } from "./loader.styled";

export const Loader = ({ children, isLoading }) => {
  if (isLoading) {
    return <LoaderMessage>Loading...</LoaderMessage>;
  }

  return children;
};
