import React from "react";

import { useRepos } from "../hooks";
import ReposComponent from "./repos-component";
import { Loader } from "../components";

const ReposContainer = () => {
  const { isError, isLoading, repos } = useRepos();

  return (
    <Loader isLoading={isLoading}>
      {isError ? (
        <p>An error occured. Please try again.</p>
      ) : (
        <ReposComponent repos={repos} />
      )}
    </Loader>
  );
};

export default ReposContainer;
