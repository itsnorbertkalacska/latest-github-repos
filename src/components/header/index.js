import React from "react";

import { APP_TITLE } from "../../consts";
import { HeaderContainer, Logo, Title } from "./header.styled";
import LogoSvg from "./logo.svg";

export const Header = () => (
  <HeaderContainer>
    <Logo src={LogoSvg} alt={`${APP_TITLE} logo`} />
    <Title>{APP_TITLE}</Title>
  </HeaderContainer>
);
