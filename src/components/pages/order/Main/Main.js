import styled from "styled-components";
import Admin from "../Main/Admin/Admin";
import Menu from "./Menu";
import { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import Basket from "./Basket/Basket";

export default function Main() {
  const { isModeAdmin } = useContext(UserContext);

  return (
    <MainStyled>
      <div>
        <Basket />
      </div>
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: #f5f5f7;
  height: calc(95vh - 10vh);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr 3fr;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    scrollbar-width: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
