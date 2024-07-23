import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({prenom}) {

  return (
    <NavbarStyled>
        <Logo scale={2.5}/>
       <NavbarRightSide prenom={prenom} />
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    height: 10%;
    padding: 0 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display : flex;
    align-items: center;
    justify-content: space-between;

   

`


