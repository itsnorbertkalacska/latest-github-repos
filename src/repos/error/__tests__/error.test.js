import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils/test-helpers";
import Error from "../index";

describe("Repos Error", () => {
  it("renders error message", () => {
    renderWithProviders(<Error />);

    expect(
      screen.getByText(
        "An error occured while fetching the repos. Please try again."
      )
    ).toBeInTheDocument();
  });

  it("does NOT render retry button", () => {
    renderWithProviders(<Error />);

    expect(screen.queryByText("Retry")).not.toBeInTheDocument();
  });

  describe("when onRetry is provided", () => {
    it("calls on retry on button click", () => {
      const onRetry = jest.fn();
      renderWithProviders(<Error onRetry={onRetry} />);

      fireEvent.click(screen.getByText("Retry"));

      expect(onRetry).toHaveBeenCalledTimes(1);
    });
  });
});
