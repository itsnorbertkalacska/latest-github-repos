import React from "react";

import { FiltersContainer, ToggleFilter } from "./filters.styled";

const Filters = ({ filters, onChange }) => (
  <FiltersContainer>
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

export default Filters;
