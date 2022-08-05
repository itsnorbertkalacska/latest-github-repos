import React from "react";

import { useRepos } from "../hooks";
import ReposComponent from "./repos-component";

const ReposContainer = () => {
  const { isError, isLoading, repos } = useRepos();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occured. Please try again.</p>;
  }

  return <ReposComponent repos={repos} />;
};

export default ReposContainer;
