import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  FiltersContainer,
  ToggleFilter,
  LanguageSelect,
} from "./filters.styled";

const Filters = ({ filters, languageFilters, onChange }) => (
  <Container data-testid="filters-container">
    <h3>Filters</h3>
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
      <label>
        Language used:
        <LanguageSelect
          onChange={(e) =>
            onChange({
              ...filters,
              languageUsed: e.currentTarget.value || null,
            })
          }
        >
          <option value="">-</option>
          {languageFilters.map((language, i) => (
            <option key={`language-option-${i}`} value={language}>
              {language}
            </option>
          ))}
        </LanguageSelect>
      </label>
    </FiltersContainer>
  </Container>
);

Filters.propTypes = {
  filters: PropTypes.shape({
    showOnlyFavourites: PropTypes.bool,
  }),
  languageFilters: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default Filters;
