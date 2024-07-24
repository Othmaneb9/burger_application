import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react";


export default function NavbarRightSide({ prenom }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false)

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile prenom={prenom}/>
    </LogOutStyled>
  )
}

const LogOutStyled = styled.div`
    font-family: "Open Sans";
    display: flex;
    align-items: center;
    padding-right: 50px;


  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background-color: #292729;
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
