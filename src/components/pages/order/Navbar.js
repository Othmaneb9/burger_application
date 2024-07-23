import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({prenom}) {

  return (
    <NavbarStyled className="header">
        <Logo onClick={() => window.location.reload()} scale={2.5} className="logo-order-page"/>
       <NavbarRightSide prenom={prenom} />
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    z-index: 2;
    height: 10%;
    padding: 0 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display : flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    position: sticky;
    top: 0;

   .logo-order-page{
    cursor: pointer;
   }

`


