import React from 'react'
import styled from 'styled-components'

export default function AdminPanel() {

  return (
    <AdminPanelStyled>
       Admin
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

`