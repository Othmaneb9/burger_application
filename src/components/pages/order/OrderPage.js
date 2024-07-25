import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useParams } from "react-router-dom";
import Admin from "./Admin/Admin";

export default function OrderPage() {
  const { prenom } = useParams();

  return (
    <BackgroundStyled>
      <ContainerStyled>
        <Navbar prenom={prenom}/>
        <Main />
        <Admin />
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