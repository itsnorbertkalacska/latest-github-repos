export const rawRepo = {
  id: 1,
  name: "My Repo",
  description: "This is the description",
  stargazersCount: 111,
  htmlUrl: "github.com/my-repo",
};

const rawRepoB = {
  id: 2,
  name: "Second Repo",
  description: "Lorem Ipsum",
  stargazersCount: 2450,
  htmlUrl: "github.com/this-is-second",
};

export const repo = {
  ...rawRepo,
  isFavourited: false,
};

const repoB = {
  ...rawRepoB,
  isFavourited: true,
};

export const rawRepos = [rawRepo, rawRepoB];

export const repos = [repo, repoB];
