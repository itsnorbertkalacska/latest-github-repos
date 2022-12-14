const BASE_URL = "https://api.github.com";

const client = {
  get: (url) =>
    fetch(`${BASE_URL}/${url}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json()),
};

const api = {
  fetchRepos: (formattedSinceDate) =>
    client.get(
      `search/repositories?q=created:>${formattedSinceDate}&sort=stars&order=desc`
    ),
};

export default api;
