import React from 'react'
import styled from 'styled-components'

export default function AdminPanel() {

  return (
    <AdminPanelStyled>
       <textarea placeholder='Ajouter un produit'/>
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    z-index: 3;
    width: 100%;
    height: 250px;
    border-radius: 0px 0px 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.1);   

    textarea{
        width: 1400px;
    }
`