import styled from "styled-components";

const RepoCardContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 0.33rem;
  flex: 1 0 30%;
  max-width: 100%;
  margin: 0 1rem 4rem;
  padding: 1rem;
  width: 100%;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`;

export { RepoCardContainer, ActionRow };
