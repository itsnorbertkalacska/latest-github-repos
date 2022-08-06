import styled from "styled-components";

const PillContainer = styled.div`
  background-color: ${(props) => props.theme.primary.main};
  border-radius: 0.25rem;
  color: white;
  padding: 0.25rem 0.5rem;

  p {
    margin: 0;
  }
`;

export { PillContainer };
