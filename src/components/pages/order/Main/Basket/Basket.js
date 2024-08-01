import React, { useContext } from "react";
import styled from "styled-components";
import MenuCommandeVide from "./MenuCommandeVide";
import BottomBasket from "./BottomBasket";
import TotalBasket from "./TotalBasket";
import AddBasketProduct from "./AddBasketProduct";
import UserContext from "../../../../../context/UserContext";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
  const {basket, menu} = useContext(UserContext)
  if(menu === undefined){<span>Chargement ...</span>}
  const sumToPay = basket.reduce((total, basketProduct) => {
    return total + basketProduct.price
  }, 0)
  return (
    <BasketStyled>
      <TotalBasket total={formatPrice(sumToPay)}/>
      {basket.length === 0 ? <MenuCommandeVide/> : <AddBasketProduct />}
      <BottomBasket />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  background: #f5f5f7;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inherit;

  font-family: "Amatic SC";
  font-size: 36px;
`;
