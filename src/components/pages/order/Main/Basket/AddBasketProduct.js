import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../../../context/UserContext";
import CardBasket from "./CardBasket";
import { formatPrice } from "../../../../../utils/maths";

export default function AddBasketProduct() {
  const {
    basket,
    handleDeleteBasket,
  } = useContext(UserContext);

  const handleClick = (event) => {
    
  };

  return (
    <AddBasketStyled>
      {basket.map(({ id, imageSource, title, price, quantity }) => {
        return (<div key={id}>
          <CardBasket
          imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          onDelete={() => handleDeleteBasket(id)}
          onClick={handleClick}
        />
        </div>
      )
})}
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
