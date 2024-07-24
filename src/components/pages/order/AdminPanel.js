import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiChevronUp } from 'react-icons/fi'
import { MdModeEditOutline } from 'react-icons/md'
import styled from 'styled-components'

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <button className='Chevron'><FiChevronUp/></button>
        <button className='Plus'><AiOutlinePlus/> Ajouter un produit</button>
        <button className='Modifier'><MdModeEditOutline/> Modifier un produit</button>
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    position: sticky;
    bottom: 0;
    display: flex;
    margin-left: 71px;

    button{
        width: 60px;
        height: 43px;
        border-radius: 5px 5px 0px 0px;
        padding: 13px 22px 14px 22px;
        background-color : #292729;
        color: white;
    }
    .Plus{
        width: 212.84px;
        padding: 10px 22.82px 11px 22px;
        color: #292729;
        background-color: white;
        border-color: #E4E5E9;
    }
    .Modifier{
        width: 212.84px;
        padding: 10px 22.82px 11px 22px;
    }

`