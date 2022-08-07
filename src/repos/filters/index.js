import React from "react";
import PropTypes from "prop-types";

import { FiltersContainer, ToggleFilter } from "./filters.styled";

const Filters = ({ filters, onChange }) => (
  <FiltersContainer data-testid="filters-container">
    <ToggleFilter>
      <input
        type="checkbox"
        onChange={() =>
          onChange({
            ...filters,
            showOnlyFavourites: !filters.showOnlyFavourites,
          })
        }
        checked={filters.showOnlyFavourites}
      />
      Show only favourites
    </ToggleFilter>
  </FiltersContainer>
);

Filters.propTypes = {
  filters: PropTypes.shape({
    showOnlyFavourites: PropTypes.bool,
  }),
  onChange: PropTypes.func,
};

export default Filters;
