import React from "react";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import backgroundIm from "../../img/backgroundBurger.jpg";

function LoginPage() {
  return (
    <BackgroundContainer>
      <Logo />
      <LoginForm />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  background: url(${backgroundIm}) rgb(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  overflow: hidden;
`;

export default LoginPage;
