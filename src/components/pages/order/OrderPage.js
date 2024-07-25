import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";

export default function OrderPage() {

  // const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const UserContextValue = {
    isModeAdmin,
    setIsModeAdmin
  };

  return (
  <UserContext.Provider value={UserContextValue}>
    <BackgroundStyled>
      <ContainerStyled>
        <Navbar/>
        <Main />
      </ContainerStyled>
    </BackgroundStyled>
  </UserContext.Provider>
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
  
  

`