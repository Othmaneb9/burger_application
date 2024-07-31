import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../../../context/UserContext";
import CardBasket from "./CardBasket";
import { formatPrice } from "../../../../../utils/maths";

export default function AddBasketProduct() {
  const { basket } = useContext(UserContext);

  return (
    <AddBasketStyled>
      {basket.map(({ id, imageSource, title, price, quantity }) => (
        <CardBasket
          key={id}
          imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}  
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
