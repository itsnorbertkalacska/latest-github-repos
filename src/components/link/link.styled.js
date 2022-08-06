import styled from "styled-components";

const Link = styled.a`
  color: ${(props) => props.theme.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.primary.dark};
  }
`;

export { Link };
