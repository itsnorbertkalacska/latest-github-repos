import styled from "styled-components";

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const ToggleFilter = styled.label`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  input {
    margin-right: 0.5rem;
  }
`;

export { FiltersContainer, ToggleFilter };
