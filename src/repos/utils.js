export const isRepoInFavourites = (repoId, favouriteRepoIds) => {
  if (!favouriteRepoIds?.length) {
    return false;
  }

  return favouriteRepoIds.includes(repoId);
};

export const enhanceRepos = (repos, favouriteRepoIds) =>
  repos.map((repo) => ({
    ...repo,
    isFavourited: isRepoInFavourites(repo.id, favouriteRepoIds),
  }));

export const filterRepos = (repos, filters) =>
  repos.filter((repo) => {
    if (filters.showOnlyFavourites) {
      return repo.isFavourited;
    }

    return true;
  });
