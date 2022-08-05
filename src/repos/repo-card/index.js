import React from "react";
import PropTypes from "prop-types";

import { RepoCardContainer } from "./repo-card.styled";

const RepoCard = ({
  repo: { name, description, stargazersCount, htmlUrl },
}) => (
  <RepoCardContainer>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Stars: {stargazersCount}</p>
    <a href={htmlUrl} target="_blank" rel="noreferrer">
      View it on GitHub
    </a>
  </RepoCardContainer>
);

RepoCard.protoTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    htmlUrl: PropTypes.string,
    description: PropTypes.string,
    stargazersCount: PropTypes.number,
  }).isRequired,
};

export default RepoCard;
