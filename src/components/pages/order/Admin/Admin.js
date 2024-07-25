import React, { useState } from 'react'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import styled from 'styled-components'
import OpenContext from '../../../../context/OpenContext'

export default function Admin() {
 const [isOpen, setIsOpen] = useState(false)

 const ItOpenOrNot = {
    isOpen,
    setIsOpen
 }
  return (
    <OpenContext.Provider value={ItOpenOrNot}>
      <AdminBlocStyled>
          <AdminTabs />
          {isOpen && <AdminPanel/>}
      </AdminBlocStyled>
    </OpenContext.Provider>
  )
}

const AdminBlocStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
 
`
