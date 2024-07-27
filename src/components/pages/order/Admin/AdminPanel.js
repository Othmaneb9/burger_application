import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../../../../context/UserContext'
import AddProduct from './AddProduct'

export default function AdminPanel() {
const {isAddSelected, isEditSelected} = useContext(UserContext)
  return (
    <AdminPanelStyled>
       {isEditSelected && <AddProduct/>}
       {isAddSelected && "Modifier un produit"}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
 
 height: 250px;
  background: #FFFFFF;
  border: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`