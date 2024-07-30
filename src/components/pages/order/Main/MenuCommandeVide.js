import React from "react";
import styled from "styled-components";

export default function MenuCommandeVide() {
  return <MenuCommandeStyled>Votre Commande est vide.</MenuCommandeStyled>;
}

const MenuCommandeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;
