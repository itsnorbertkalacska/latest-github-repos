import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border: 0.125rem solid ${(props) => props.theme.primary.main};
  border-radius: 0.33rem;
  color: ${(props) => props.theme.primary.main};
  font-size: 1rem;
  padding: 0.25rem 1rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.primary.main};
    color: white;
    cursor: pointer;
  }
`;

export { Button };
