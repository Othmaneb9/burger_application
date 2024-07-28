import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { fakeMenu } from "../../fakeData/fakeMenu";

export default function OrderPage() {
  const [productSelected, setProductSelected] = useState({
    id: "",
    title : "",
    imageSource: "",
    price: 0
  });
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAddProduct = (NewProduct) => {
    const UpdatedMenu = [NewProduct, ...menu];
    setMenu(UpdatedMenu);
  };
  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu];
    const NewMenu = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    setMenu(NewMenu);
  };
  

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
    productSelected,
    setProductSelected,
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
