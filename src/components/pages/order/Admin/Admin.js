import React, { useContext, useState } from 'react'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import UserContext from '../../../../context/UserContext'
import styled from 'styled-components'
import OpenContext from '../../../../context/OpenContext'

export default function Admin() {
 const [isOpen, setIsOpen] = useState(false)
 const {isModeAdmin, setIsModeAdmin} = useContext(UserContext)
 const OpenOrClose = useContext(OpenContext)

 const ItOpenOrNot = {
    isOpen,
    setIsOpen
 }
  return (
    <OpenContext.Provider value={ItOpenOrNot}>
      <AdminBlocStyled>
          {isModeAdmin && <AdminTabs />}
          
          {isModeAdmin && <AdminPanel/>}
          
      </AdminBlocStyled>
    </OpenContext.Provider>
  )
}

const AdminBlocStyled = styled.div`
      position: relative;
`
