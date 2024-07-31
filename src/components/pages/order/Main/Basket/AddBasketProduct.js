import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../../../context/UserContext";
import CardBasket from "./CardBasket";
import { formatPrice } from "../../../../../utils/maths";

export default function AddBasketProduct() {
  const {productSelected, handleEdit, setProductSelected, basket, handleDeleteBasket } = useContext(UserContext);

  const handleClick = (event) => {
    const { name, value } = event.target;
    const produitToEdit = { ...productSelected, [name]: value };
    setProductSelected(produitToEdit);
    handleEdit(produitToEdit);
  }


  return (
    <AddBasketStyled>
      {basket.map(({ id, imageSource, title, price, quantity }) => (
        <CardBasket
          key={id}
          imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          onDelete={() => handleDeleteBasket(id)}
          onClick={handleClick}
        />
      ))}
    </AddBasketStyled>
  );
}
const AddBasketStyled = styled.div`
  height: 654px;
  display: grid;
  grid-template-rows: repeat(4, 106px);
  overflow: hidden;
  overflow-y: scroll;

  scrollbar-width: none;
  position: relative;
`;
