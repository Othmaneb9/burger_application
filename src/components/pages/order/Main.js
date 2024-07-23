import styled from "styled-components"

export default function Main() {
  return (
    <MainStyled>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
        <div className="Card-Style">Card</div>
    </MainStyled>
  )
}





const MainStyled = styled.div`
    background: #F5F5F7;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap : 20px;
    grid-row-gap: 60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
    

   

    .Card-Style{
      margin-top : 50px;
      width: 240px;
      height: 330px;
      background-color: white;
      border-radius: 15px;
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      justify-self: center;      
    }
`
