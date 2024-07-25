import React, { useContext, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';
import BottomButton from '../../../reusable-ui/BottomButton';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import OpenContext from '../../../../context/OpenContext';

export default function AdminTabs() {
const {isOpen, setIsOpen} = useContext(OpenContext)


  return (
    <AdminTabsStyled>
        <BottomButton onClick={() => setIsOpen(!isOpen)} Icon={isOpen ? <FiChevronDown/> : <FiChevronUp/>} className={isOpen ? "is-active" : ""}/>
        
        <BottomButton Icon={<AiOutlinePlus/>} label={" Ajouter un produit"} className='Plus'/>

        <BottomButton Icon={<MdModeEditOutline/>} label={" Modifier un produit"} className='Modifier'/>
    </AdminTabsStyled>
  )
}



const AdminTabsStyled = styled.div`
    position: relative;
    display: flex;
    margin-left: 71px;

    button{
        width: 60px;
        height: 43px;
        border-radius: 5px 5px 0px 0px;
        padding: 13px 22px 14px 22px;
        background-color : #292729;
        color: white;
        cursor: pointer;
        margin-left: 1px;
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
    .is-active{
        background-color: white;
        color: grey;
        border-color: #E4E5E9;
    }
`
