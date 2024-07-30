import React from "react";
import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="total">
        <div className="total-text">
          <div>Total</div> <div>0,00€</div>
        </div>
      </div>
      <div className="menu-commande">Votre Commande est vide.</div>
      <div className="bottom-text">Codé avec REACT.Js</div>
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

  .total {
    padding: 0px, 16px, 0px, 16px;
    height: 70px;
    background: #292729;
    color: #ffa01b;

    .total-text {
      height: 70px;
      margin-left: 16px;
      margin-right: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .menu-commande {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  .bottom-text {
    padding: 0px, 16px, 0px, 16px;
    height: 70px;
    background: #292729;
    color: #ffa01b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    margin-top: 22px;
    border-radius: 0px 0px 0px 15px;
  }
`;
