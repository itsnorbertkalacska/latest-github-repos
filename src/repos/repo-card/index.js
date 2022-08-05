import React from "react";
import PropTypes from "prop-types";

import { Button, Link } from "../../components";
import { RepoCardContainer, ActionRow } from "./repo-card.styled";

const RepoCard = ({
  repo: { name, description, stargazersCount, htmlUrl, isFavourited },
  onSaveToFavourites,
}) => (
  <RepoCardContainer>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Stars: {stargazersCount}</p>
    <ActionRow>
      <Link href={htmlUrl} isExternal>
        View it on GitHub
      </Link>
      <Button onClick={onSaveToFavourites}>
        {isFavourited ? "Remove from Favourites" : "Save to Favourites"}
      </Button>
    </ActionRow>
  </RepoCardContainer>
);

RepoCard.protoTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    htmlUrl: PropTypes.string,
    description: PropTypes.string,
    stargazersCount: PropTypes.number,
    isFavourited: PropTypes.bool,
  }).isRequired,
  onSaveToFavourites: PropTypes.func,
};

export default RepoCard;
