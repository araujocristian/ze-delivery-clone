import React from "react";

import { Container, Content } from "./styles";
import LogoWhite from "../../assets/images/logo-white.png";

export default function Footer() {
  return (
    <Container>
      <Content>
        <a href="/">
          <img width="250" src={LogoWhite} alt="Logo white" />
        </a>
      </Content>
    </Container>
  );
}
