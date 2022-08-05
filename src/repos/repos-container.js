import React, { useMemo } from "react";
import { subDays } from "date-fns";

import { useRepos } from "../hooks";
import ReposComponent from "./repos-component";
import { Loader } from "../components";

const ReposContainer = () => {
  const aWeekAgo = useMemo(() => subDays(new Date(), 7), []);
  const { isError, isLoading, repos } = useRepos({
    sinceDate: aWeekAgo,
  });

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
