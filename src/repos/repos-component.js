import React from "react";
import PropTypes from "prop-types";

import { ReposContainer } from "./repos.styled";
import RepoCard from "./repo-card";

const ReposComponent = ({ repos, onSaveToFavourites }) => {
  return repos.length ? (
    <ReposContainer>
      {repos.map((repo) => (
        <RepoCard
          key={`repo-${repo.id}`}
          repo={repo}
          onSaveToFavourites={() => onSaveToFavourites(repo.id)}
        />
      ))}
    </ReposContainer>
  ) : (
    <p>No repos.</p>
  );
};

ReposComponent.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      htmlUrl: PropTypes.string,
      description: PropTypes.string,
      stargazersCount: PropTypes.number,
      isFavourited: PropTypes.bool,
    })
  ).isRequired,
  onSaveToFavourites: PropTypes.func,
};

export default ReposComponent;
