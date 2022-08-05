import React, { useMemo } from "react";
import { subDays } from "date-fns";
import useLocalStorage from "use-local-storage";

import { useRepos } from "../hooks";
import ReposComponent from "./repos-component";
import { Loader } from "../components";

const ReposContainer = () => {
  const aWeekAgo = useMemo(() => subDays(new Date(), 7), []);
  const [favouriteRepoIds, setFavouriteRepoIds] = useLocalStorage(
    "favouriteRepoIds",
    []
  );
  const { isError, isLoading, repos } = useRepos({
    sinceDate: aWeekAgo,
  });
  const enhancedRepos = useMemo(
    () =>
      repos.map((repo) => ({
        ...repo,
        isFavourited: favouriteRepoIds.includes(repo.id),
      })),
    [favouriteRepoIds, repos]
  );

  const onSaveToFavourites = (repoId) => {
    if (favouriteRepoIds.includes(repoId)) {
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
        <p>An error occured. Please try again.</p>
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
