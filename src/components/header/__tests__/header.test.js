import { render } from "@testing-library/react";

import { Header } from "../index";

describe("Header", () => {
  it("renders component properly", () => {
    const { container } = render(<Header />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
