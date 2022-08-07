import { fireEvent, render, screen } from "@testing-library/react";

import Filters from "../index";

describe("Repos Filters", () => {
  const onChange = jest.fn();
  const defaultProps = {
    filters: {
      showOnlyFavourites: false,
    },
    languageFilters: [],
    onChange,
  };

  const renderComponent = () => render(<Filters {...defaultProps} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders proper filters", () => {
    renderComponent();

    expect(screen.getByLabelText("Show only favourites")).toBeInTheDocument();
  });

  describe("when only favourites is changed", () => {
    it("toggles showOnlyFavourites properly", () => {
      renderComponent();

      fireEvent.click(screen.getByLabelText("Show only favourites"));

      expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
      expect(defaultProps.onChange).toHaveBeenCalledWith({
        showOnlyFavourites: true,
      });
    });
  });
});
