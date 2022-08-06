import { renderWithProviders } from "../../../test-utils";
import { Link } from "../index";

describe("Link", () => {
  it("passes props properly", () => {
    const { container } = renderWithProviders(
      <Link href="/about">My Link</Link>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("when external link", () => {
    const isExternal = true;

    it("passes props properly", () => {
      const { container } = renderWithProviders(
        <Link href="https://veed.io" isExternal={isExternal}>
          My Link
        </Link>
      );
      // eslint-disable-next-line testing-library/no-node-access
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
