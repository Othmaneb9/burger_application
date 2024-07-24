import React from 'react'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import "react-toastify/dist/ReactToastify.css"

export default function ToastAdmin() {
  return (
    <ToastAdminStyled>
        <ToastContainer className="toaster" bodyClassName="body-toast" />
    </ToastAdminStyled>
  )
}

const ToastAdminStyled = styled.div`

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