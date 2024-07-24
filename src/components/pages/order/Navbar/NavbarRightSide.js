import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toasts } from "./NavbarRightSideIncomplet";

export default function NavbarRightSide({ prenom }) {
  const handleChange = () => {
    toasts();
  }
  const handleSubmit = () => {
    
  }
  return (
    <LogOutStyled>
        <ToggleButton 
        onToggle={handleChange}
        isChecked={handleSubmit}
        labelIfUnchecked="Activer le mode admin" 
        labelIfChecked="Désactiver le mode Admin"
        />
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
