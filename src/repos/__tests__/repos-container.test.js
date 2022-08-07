import { fireEvent, screen } from "@testing-library/react";

import { getRepos } from "../../services/repos-service";
import { rawRepos } from "../../test-utils/mocks";
import { renderWithProviders } from "../../test-utils/test-helpers";

import ReposContainer from "../repos-container";

jest.mock("use-local-storage", () => ({
  __esModule: true,
  default: () => [[1, jest.fn()]], // 1 is the id of rawRepos[0]
}));
jest.mock("../../services/repos-service");

const AUGUST_FIFTH = new Date(2022, 7, 5, 14, 40, 15, 0);
// A week earlier of AUGUST_FIFTH
const JULY_TWENTY_NINTH = new Date(2022, 6, 29, 14, 40, 15, 0);

describe("Repos Container", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(AUGUST_FIFTH);
    getRepos.mockResolvedValue(rawRepos);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it("renders loader before rendering repos list", async () => {
    renderWithProviders(<ReposContainer />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    expect(await screen.findByText(rawRepos[0].name)).toBeInTheDocument();
    expect(screen.getByText(rawRepos[1].name)).toBeInTheDocument();
  });

  it("renders filters", async () => {
    renderWithProviders(<ReposContainer />);

    expect(await screen.findByTestId("filters-container")).toBeInTheDocument();
  });

  it("filters out not favourited ones", async () => {
    renderWithProviders(<ReposContainer />);

    expect(await screen.findByTestId("filters-container")).toBeInTheDocument();

    expect(screen.getByText(rawRepos[0].name)).toBeInTheDocument();
    expect(screen.getByText(rawRepos[1].name)).toBeInTheDocument();

    fireEvent.click(screen.getByText("Show only favourites"));

    expect(screen.getByText(rawRepos[0].name)).toBeInTheDocument();
  });

  it("calls service with right argument", async () => {
    renderWithProviders(<ReposContainer />);

    // wait for an element to appear to get rid of noise in console
    expect(await screen.findByTestId("filters-container")).toBeInTheDocument();
    expect(getRepos).toBeCalledTimes(1);
    expect(getRepos).toBeCalledWith(JULY_TWENTY_NINTH);
  });

  it("sets favourited from local storage", async () => {
    renderWithProviders(<ReposContainer />);

    expect(await screen.findByText(rawRepos[0].name)).toBeInTheDocument();
    expect(screen.getByText("Save to Favourites")).toBeInTheDocument();
    expect(screen.getByText("Remove from Favourites")).toBeInTheDocument();
  });

  describe("when there is an error with fetching repos", () => {
    beforeEach(() => {
      getRepos.mockRejectedValue(null);
    });

    it("renders error message", async () => {
      renderWithProviders(<ReposContainer />);

      expect(
        await screen.findByText(
          "An error occured while fetching the repos. Please try again."
        )
      ).toBeInTheDocument();
    });

    it("renders retry button", async () => {
      renderWithProviders(<ReposContainer />);

      expect(await screen.findByText("Retry")).toBeInTheDocument();
    });

    it("fetches repos again on retry", async () => {
      renderWithProviders(<ReposContainer />);

      let retryButton = await screen.findByText("Retry");
      expect(retryButton).toBeInTheDocument();

      fireEvent.click(retryButton);
      retryButton = await screen.findByText("Retry");
      expect(retryButton).toBeInTheDocument();
      expect(getRepos).toBeCalledTimes(2);

      fireEvent.click(retryButton);
      retryButton = await screen.findByText("Retry");
      expect(retryButton).toBeInTheDocument();
      expect(getRepos).toBeCalledTimes(3);
    });
  });
});
