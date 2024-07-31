import React, { useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { useMenu } from "../../../hooks/useMenu";
import { fakeBasket } from "../../fakeData/fakeBasket";
import { getUser } from "../../../api/user";

export default function OrderPage() {
  const [productSelected, setProductSelected] = useState({
    id: "",
    title: "",
    imageSource: "",
    price: 0,
  });
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddBasket = async (NewProduct) => {
    const nouveauProduit = menu.find((produit) => NewProduct === produit.id);
    const newBasket = [nouveauProduit, ...basket];
    await setBasket(newBasket);
  };

  const handleDeleteBasket = async (newDelete) => {
    const deleteBasket = [...basket].filter(
      (product) => newDelete !== product.id
    );
    await setBasket(deleteBasket);
  };
  const handleEditBasket = (productToEdit) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));
    const indexOfProductToEdit = basket.findIndex(
      (product) => product.id === productToEdit.id
    );
    console.log(indexOfProductToEdit);
    basketCopy[indexOfProductToEdit] = productToEdit;
    setBasket(basketCopy);
  };

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const inputBaliseRef = useRef();
  const { handleAddProduct, handleDelete, handleEdit, menu, resetMenu } =
    useMenu();

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
    handleDeleteBasket,
    handleEditBasket,
  };

  getUser("Alex")





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
