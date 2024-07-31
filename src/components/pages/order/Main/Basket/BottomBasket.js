import styled from "styled-components";

export default function BottomBasket() {
  return (
    <BottomBasketStyled className="bottom-text">
      Codé avec REACT.Js
    </BottomBasketStyled>
  );
}

const BottomBasketStyled = styled.div`
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
  overflow: hidden;
`;
