import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ prenom }) {
  return (
    <LogOutStyled>
        <Profile prenom={prenom}/>
    </LogOutStyled>
  )
}

const LogOutStyled = styled.div`
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    padding-right: 50px;
  
`
