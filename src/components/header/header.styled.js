import styled from "styled-components";

const Logo = styled.img`
  height: 60px;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0.5rem 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

export { HeaderContainer, Logo, Title };
