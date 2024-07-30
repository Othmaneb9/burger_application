import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../../../context/UserContext";
import CardBasket from "./CardBasket";
import { formatPrice } from "../../../../../utils/maths";

export default function AddBasketProduct() {


  const { handleAddBasket, basket } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddBasket()
  }

  return (
    <AddBasketStyled>
      {basket.map(({ id, imageSource, title, price }) => (
        <CardBasket
          key={id}
          imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
          title={title}
          price={formatPrice(price)}
        />
      ))}
    </AddBasketStyled>
  );
}
const AddBasketStyled = styled.div`
  height: 80%;
`;
