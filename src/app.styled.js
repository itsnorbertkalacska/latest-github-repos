import styled from "styled-components";

const HEADER_HEIGHT = "76px";
const FOOTER_HEIGHT = "83px";
const MAIN_TOP_MARGIN = "2rem";

const Main = styled.main`
  margin: ${MAIN_TOP_MARGIN} auto 0;
  max-width: 82%;
  min-height: calc(
    100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${MAIN_TOP_MARGIN}
  );
  padding: 0 2rem;
`;

export { Main };
