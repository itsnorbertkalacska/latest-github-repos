import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils/test-helpers";
import { repo } from "../../../test-utils/mocks";
import RepoCard from "../index";

describe("RepoCard", () => {
  const defaultProps = {
    repo,
    onSaveToFavourites: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders basic data", () => {
    renderWithProviders(<RepoCard {...defaultProps} />);

    const gitHubLink = screen.getByText("View it on GitHub");

    expect(screen.getByText(defaultProps.repo.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.repo.description)).toBeInTheDocument();
    expect(
      screen.getByText(`Stars: ${defaultProps.repo.stargazersCount}`)
    ).toBeInTheDocument();
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute("href", defaultProps.repo.htmlUrl);
    expect(screen.getByText("Save to Favourites")).toBeInTheDocument();
  });

  it("calls onSaveToFavourites with right data", () => {
    renderWithProviders(<RepoCard {...defaultProps} />);

    fireEvent.click(screen.getByText("Save to Favourites"));

    expect(defaultProps.onSaveToFavourites).toHaveBeenCalledTimes(1);
  });

  it("does NOT render Favourite pill", () => {
    renderWithProviders(<RepoCard {...defaultProps} />);

    expect(screen.queryByText("Favourite")).not.toBeInTheDocument();
  });

  describe("when repo is favourited", () => {
    const favouritedProps = {
      ...defaultProps,
      repo: {
        ...defaultProps.repo,
        isFavourited: true,
      },
    };

    it("renders Favourite pill", () => {
      renderWithProviders(<RepoCard {...favouritedProps} />);

      expect(screen.getByText("Favourite")).toBeInTheDocument();
    });

    it("renders Remove button", () => {
      renderWithProviders(<RepoCard {...favouritedProps} />);

      expect(screen.getByText("Remove from Favourites")).toBeInTheDocument();
    });
  });
});
