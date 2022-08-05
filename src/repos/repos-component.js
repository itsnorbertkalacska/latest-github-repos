import React from "react";
import PropTypes from "prop-types";

const ReposComponent = ({ repos }) => {
  return repos.length ? (
    <ul>
      {repos.map((repo) => (
        <li key={`repo-${repo.id}`}>{repo.name}</li>
      ))}
    </ul>
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
    })
  ).isRequired,
};

export default ReposComponent;
