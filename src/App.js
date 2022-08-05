import { Footer, Header } from "./components";
import ReposContainer from "./repos/repos-container";

const App = () => (
  <>
    <Header />

    <main>
      <ReposContainer />
    </main>

    <Footer />
  </>
);

export default App;
