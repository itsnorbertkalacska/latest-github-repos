import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const ToggleFilter = styled.label`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: 2rem;

  input {
    margin-right: 0.5rem;
  }
`;

const LanguageSelect = styled.select`
  margin-left: 0.5rem;
`;

export { Container, FiltersContainer, ToggleFilter, LanguageSelect };
