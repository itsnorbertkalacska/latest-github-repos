import { camelizeKeys } from "ramda-extension";

import api from "./api";

export const getRepos = async () => {
  const response = await api.fetchRepos();
  return camelizeKeys(response.items);
};
