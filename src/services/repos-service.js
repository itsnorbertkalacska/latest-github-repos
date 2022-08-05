import { camelizeKeys } from "ramda-extension";
import { format } from "date-fns";

import { GITHUB_DATEFORMAT } from "../consts";
import api from "./api";

export const getRepos = async (sinceDate) => {
  const formattedSinceDate = format(sinceDate, GITHUB_DATEFORMAT);
  const response = await api.fetchRepos(formattedSinceDate);
  return camelizeKeys(response.items);
};
