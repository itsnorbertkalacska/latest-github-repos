import { useEffect, useState } from "react";

export const useFilters = (repos) => {
  const [filters, setFilters] = useState({
    showOnlyFavourites: false,
    languageUsed: null,
  });
  const [languagesFilter, setLanguagesFilter] = useState([]);

  useEffect(() => {
    if (repos.length) {
      const languages = [];
      repos.forEach((repo) => {
        if (repo.language && !languages.includes(repo.language)) {
          languages.push(repo.language);
        }
      });
      setLanguagesFilter(languages);
    }
  }, [repos]);

  return { filters, setFilters, languagesFilter };
};
