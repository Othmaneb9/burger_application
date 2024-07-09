import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function OrderPage() {
  
  return (
    <BackgroundStyled>
      <ContainerStyled>
        <Navbar/>
        <div className="Main"></div>
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
  
  
`
const ContainerStyled = styled.div`
  background: white;
  width: 1400px;
  height: 95%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  

  .Main{
    background: green;
    flex: 1;
  }
`