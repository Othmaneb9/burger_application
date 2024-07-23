import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo";

export default function Navbar() {
  const { prenom } = useParams();

  return (
    <NavbarStyled>
        <Logo scale={2.5}/>
       <NavbarRightSide value={prenom} label={"Se déconnecter"} Icon={<BsPersonCircle />}/>
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


