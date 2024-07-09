import { useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import OrderLogOut from "./OrderLogOut";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

export default function Navbar() {
  const { prenom } = useParams();

  return (
    <NavbarStyled>
        <div className="logo">
        <Logo />
        </div>
        <OrderLogOut value={prenom} label={"Se déconnecter"} Icon={<BsPersonCircle />}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
    background : red;
    height: 10%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display : flex;
    align-items: center;
    justify-content: end;

    .logo{
        width: 15%;
        font-size: 36px;
    }
`


