import styled from "styled-components";

export default function Loader() {
  return <LoadingStyled>CHARGEMENT EN COURS ...</LoadingStyled>;
}

const LoadingStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC";
  font-size: 36px;
  color: #747b91;
`;
