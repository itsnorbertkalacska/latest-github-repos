import { render } from "@testing-library/react";

import { Footer } from "../index";

describe("Footer", () => {
  it("renders component properly", () => {
    const { container } = render(<Footer />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
