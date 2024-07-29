import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyStyle>
      <span>Pas de Produit</span>
    </EmptyStyle>
  );
}

const EmptyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
