import { fireEvent, screen } from "@testing-library/react";

import { repos } from "../../test-utils/mocks";
import { renderWithProviders } from "../../test-utils/test-helpers";

import ReposComponent from "../repos-component";

describe("Repos Component", () => {
  it("renders repos", () => {
    renderWithProviders(<ReposComponent repos={repos} />);

    for (let i = 0; i < repos.length; i++) {
      expect(screen.getByText(repos[i].name)).toBeInTheDocument();
    }
  });

  it("calls onSaveToFavourites with right argument", () => {
    const onSaveToFavourites = jest.fn();
    renderWithProviders(
      <ReposComponent repos={repos} onSaveToFavourites={onSaveToFavourites} />
    );

    const onSaveButton = screen.getByText("Save to Favourites");
    const onRemoveButton = screen.getByText("Remove from Favourites");

    fireEvent.click(onSaveButton);
    expect(onSaveToFavourites).toBeCalledTimes(1);
    expect(onSaveToFavourites).toBeCalledWith(repos[0].id);

    fireEvent.click(onRemoveButton);
    expect(onSaveToFavourites).toBeCalledTimes(2);
    expect(onSaveToFavourites).toBeCalledWith(repos[1].id);
  });

  describe("when repos is an empty array", () => {
    it("renders empty message", () => {
      renderWithProviders(<ReposComponent repos={[]} />);

      expect(screen.getByText("No repos.")).toBeInTheDocument();
    });
  });
});
