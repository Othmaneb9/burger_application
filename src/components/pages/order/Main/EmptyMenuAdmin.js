import styled from "styled-components";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyStyle>
      <span>Le menu est vide ?</span>
      <span>Cliquez ci-dessous pour le réinitialiser</span>

      <button className={"button-generate"} onClick={onReset}>
        Générer de nouveaux produits
      </button>
    </EmptyStyle>
  );
}

const EmptyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .button-generate {
    width: 224px;
    height: 50px;
    box-shadow: none;
    color: white;
    background: #ff9f1b;
    border: 1px solid #ff9f1b;
    border-radius: 5px;
  }
`;
