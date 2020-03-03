import React from "react";

import { Container } from "./styles";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <Container>
      <a href="/">
        <img width="175" height="56" src={Logo} alt="Logo" />
      </a>
    </Container>
  );
}
