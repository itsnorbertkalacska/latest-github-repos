import { renderWithProviders } from "../../../test-utils/test-helpers";
import { Pill } from "../index";

describe("Pill", () => {
  it("renders component properly", () => {
    const { container } = renderWithProviders(<Pill label="Fav" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
