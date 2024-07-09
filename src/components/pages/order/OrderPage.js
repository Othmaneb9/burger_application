import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import OrderLogOut from "./OrderLogOut";
import styled from "styled-components";

export default function OrderPage() {
  //state
  const { prenom } = useParams();

  //comportement

  //affichage

  return (
    <BackgroundStyled>
      <ContainerStyled>
        <Logo />
        <OrderLogOut value={prenom} label={"Se déconnecter"} Icon={<BsPersonCircle />}/>
      </ContainerStyled>
    </BackgroundStyled>
  );
}

const BackgroundStyled = styled.div`
  background: #FFA01B;
  height: 100vh;
  display: flex;
  justify-content : center;
  align-items: center;
  ;
`
const ContainerStyled = styled.div`
  background: white;
  width: 1400px;
  height: 95%;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
`