import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import ToastAdmin from "./ToastAdmin";
import UserContext from "../../../../context/UserContext";


export default function NavbarRightSide() {

  const {isModeAdmin, setIsModeAdmin} = useContext(UserContext)

  const displayToastNotification = () => {
    if(!isModeAdmin){
    toast.info("Mode admin activé", {
      // icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    }
    setIsModeAdmin(!isModeAdmin);
}
  
 
  return (
    <LogOutStyled>
        <ToggleButton 
          onToggle={displayToastNotification}
          labelIfUnchecked="Activer le mode admin" 
          labelIfChecked="Désactiver le mode Admin"
        />
      <ToastAdmin/>  
      <Profile />
    </LogOutStyled>
  )
}

const LogOutStyled = styled.div`
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    padding-right: 50px;
`
