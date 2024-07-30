import styled from "styled-components";

export default function TotalBasket() {
  return (
    <TotalBasketStyled className="total">
      <div className="total-text">
        <div>Total</div> <div>0,00€</div>
      </div>
    </TotalBasketStyled>
  );
}

const TotalBasketStyled = styled.div`
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
`;
