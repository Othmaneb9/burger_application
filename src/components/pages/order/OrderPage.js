import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const { prenom } = useParams();

  return (
    <BackgroundStyled>
      <ContainerStyled>
        <Navbar prenom={prenom}/>
        <Main />
      </ContainerStyled>
    </BackgroundStyled>
  );
}

const BackgroundStyled = styled.div`
  background: #FFA01B;
  background-attachment: scroll;
  height: 100vh;
  display: flex;
  justify-content : center;
  align-items: center;
  
`
const ContainerStyled = styled.div`
  background: white;
  width: 1400px;
  height: 95%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  
  overflow-y: scroll;
  scrollbar-width: none;
`