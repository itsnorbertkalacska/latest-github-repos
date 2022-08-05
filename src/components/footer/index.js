import React from "react";

import { APP_TITLE } from "../../consts";
import { FooterContainer } from "./footer.styled";

const Footer = () => {
  const now = new Date();

  return (
    <FooterContainer>
      <p>
        {now.getFullYear()} &copy; {APP_TITLE}
      </p>
    </FooterContainer>
  );
};

export default Footer;
