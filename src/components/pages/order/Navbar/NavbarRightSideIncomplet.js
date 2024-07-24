import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"

export const toasts = () => {
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

export default function NavbarRightSideIncomplet() {
 

  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideIncompletStyled>
  )
}



const NavbarRightSideIncompletStyled = styled.div`
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
