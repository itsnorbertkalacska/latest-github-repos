import React, { useMemo } from "react";
import { subDays } from "date-fns";
import useLocalStorage from "use-local-storage";

import { useRepos } from "../hooks";
import ReposComponent from "./repos-component";
import Error from "./error";
import { Loader } from "../components";
import { isRepoInFavourites } from "./utils";

const ReposContainer = () => {
  const aWeekAgo = useMemo(() => subDays(new Date(), 7), []);
  const [favouriteRepoIds, setFavouriteRepoIds] = useLocalStorage(
    "favouriteRepoIds",
    []
  );
  const { isError, isLoading, repos, fetchRepos } = useRepos({
    sinceDate: aWeekAgo,
  });
  const enhancedRepos = useMemo(
    () =>
      repos.map((repo) => ({
        ...repo,
        isFavourited: isRepoInFavourites(repo.id, favouriteRepoIds),
      })),
    [favouriteRepoIds, repos]
  );

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
        <Error onRetry={() => fetchRepos()} />
      ) : (
        <ReposComponent
          repos={enhancedRepos}
          onSaveToFavourites={onSaveToFavourites}
        />
      )}
    </Loader>
  );
};

export default ReposContainer;
