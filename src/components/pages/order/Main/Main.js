import styled from "styled-components"
import Admin from "../Admin/Admin"
import Menu from "./Menu"


export default function Main() {

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
          <Menu/> 
          <Admin />
      </div>
    </MainStyled>
  )
}





const MainStyled = styled.div`
    background: #F5F5F7;
    height: calc(95vh - 10vh);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 1fr;

    
    
    
    .menu-and-admin{
      position: relative;
      overflow-y: hidden;
    display: grid;
    scrollbar-width: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    } 

   
`
