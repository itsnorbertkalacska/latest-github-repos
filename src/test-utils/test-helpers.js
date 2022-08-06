import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

import { theme } from "../theme";

export const renderWithProviders = (ui) => {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
  return render(ui, { wrapper: Wrapper });
};
