import React, { useMemo } from "react";
import { subDays } from "date-fns";
import useLocalStorage from "use-local-storage";

import { useFilters, useRepos } from "../hooks";
import Error from "./error";
import Filters from "./filters";
import ReposComponent from "./repos-component";
import { Loader } from "../components";
import { isRepoInFavourites, enhanceRepos, filterRepos } from "./utils";

const ReposContainer = () => {
  const aWeekAgo = useMemo(() => subDays(new Date(), 7), []);

  const [favouriteRepoIds, setFavouriteRepoIds] = useLocalStorage(
    "favouriteRepoIds",
    []
  );
  const { isError, isLoading, repos, fetchRepos } = useRepos({
    sinceDate: aWeekAgo,
  });
  const { filters, setFilters, languagesFilter } = useFilters(repos);
  const enhancedRepos = useMemo(
    () => enhanceRepos(repos, favouriteRepoIds),
    [favouriteRepoIds, repos]
  );
  const filteredRepos = filterRepos(enhancedRepos, filters);

  const onFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const onSaveToFavourites = (repoId) => {
    if (isRepoInFavourites(repoId, favouriteRepoIds)) {
      setFavouriteRepoIds(
        favouriteRepoIds.filter((favouriteId) => favouriteId !== repoId)
      );
    } else {
      setFavouriteRepoIds([...favouriteRepoIds, repoId]);
    }
  };

  return (
    <Loader isLoading={isLoading}>
      {isError ? (
        <Error onRetry={fetchRepos} />
      ) : (
        <>
          <Filters
            onChange={onFiltersChange}
            filters={filters}
            languageFilters={languagesFilter}
          />
          <ReposComponent
            repos={filteredRepos}
            onSaveToFavourites={onSaveToFavourites}
          />
        </>
      )}
    </Loader>
  );
};

export default ReposContainer;
