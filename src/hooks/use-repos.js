import { useCallback, useEffect, useState } from "react";

import { getRepos } from "../services/repos-service";

export const useRepos = ({ sinceDate }) => {
  const [repos, setRepos] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepos = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    getRepos(sinceDate)
      .then((repos) => {
        setRepos(repos);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsDone(true);
        setIsLoading(false);
      });
  }, [sinceDate]);

  useEffect(() => {
    if (!isLoading && !isDone) {
      fetchRepos();
    }
  }, [isLoading, isDone, fetchRepos]);

  return { repos, isDone, isError, isLoading };
};
