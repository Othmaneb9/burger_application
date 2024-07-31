import React, { useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { useMenu } from "../../../hooks/useMenu";
import { fakeBasket } from "../../fakeData/fakeBasket";

export default function OrderPage() {
  const [productSelected, setProductSelected] = useState({
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  });
  const [basket, setBasket] = useState(fakeBasket.EMPTY);



  const handleAddBasket = (NewProduct) => {
    const nouveauProduit = menu.find((produit) => NewProduct === produit.id);
    console.log('Nouveau Produit :', )
    const newBasket = [nouveauProduit, ...basket];
    setBasket(newBasket);
  }



  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const inputBaliseRef = useRef();
  const {
    handleAddProduct,
    handleDelete,
    handleEdit,
    menu,
    resetMenu,
  } = useMenu();

  const UserContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setIsAddSelected,
    menu,
    handleDelete,
    handleAddProduct,
    handleEdit,
    productSelected,
    setProductSelected,
    resetMenu,
    inputBaliseRef,
    basket,
handleAddBasket,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      <BackgroundStyled>
        <ContainerStyled>
          <Navbar />
          <Main />
        </ContainerStyled>
      </BackgroundStyled>
    </UserContext.Provider>
  );
}

const BackgroundStyled = styled.div`
  background: #ffa01b;
  background-attachment: scroll;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerStyled = styled.div`
  background: white;
  width: 1400px;
  height: 95%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
