import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils/test-helpers";
import { Button } from "../index";

describe("Button", () => {
  it("calls onClick on click", () => {
    const onClick = jest.fn();
    renderWithProviders(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes props propery", () => {
    const { container } = renderWithProviders(
      <Button type="submit">Click me</Button>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
