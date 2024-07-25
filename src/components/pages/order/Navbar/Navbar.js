import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../../reusable-ui/Logo";

export default function Navbar({prenom}) {

  return (
    <NavbarStyled className="header">
        <Logo onClick={() => window.location.reload()} scale={2.5} className="logo-order-page"/>
       <NavbarRightSide prenom={prenom} />
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background-color: white;
    height: 10%;
    display : flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    

   .logo-order-page{
    cursor: pointer;
   }

`


