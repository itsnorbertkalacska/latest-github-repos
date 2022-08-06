import styled from "styled-components";

const RepoCardContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 0.33rem;
  display: flex;
  flex-direction: column;
  flex: 1 0 25%;
  max-width: 100%;
  margin: 0 1rem 4rem;
  padding: 1rem;
  width: 100%;
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  flex-grow: 1;
`;

const DescriptionContainer = styled.div`
  flex-grow: 1;
`;

const ActionRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
`;

export {
  RepoCardContainer,
  TitleContainer,
  Title,
  DescriptionContainer,
  ActionRow,
};
