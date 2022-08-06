import { ThemeProvider } from "styled-components";

import { Footer, Header } from "./components";
import ReposContainer from "./repos/repos-container";
import { theme } from "./theme";

import { Main } from "./app.styled";

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />

    <Main>
      <ReposContainer />
    </Main>

    <Footer />
  </ThemeProvider>
);

export default App;
