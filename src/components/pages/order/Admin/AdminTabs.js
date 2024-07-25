import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';
import BottomButton from '../../../reusable-ui/BottomButton';
import AdminPanel from './AdminPanel';

export default function AdminTabs() {
    const [isConnected, setIsConnected] = useState(false)

    const handleClick = () => {
      setIsConnected(!isConnected)
    };
  return (
    <AdminTabsStyled>
        <button onClick={handleClick}>
        {isConnected &&(
            <div className='Ouvert'><FiChevronDown/> <AdminPanel /></div>
        )}
        {!isConnected &&(
            <div className='Fermer'><FiChevronUp/></div>
        )}
        </button>

        <BottomButton Icon={<AiOutlinePlus/>} label={" Ajouter un produit"} onClick={handleClick} className='Plus'/>

        <BottomButton Icon={<MdModeEditOutline/>} label={" Modifier un produit"} onClick={handleClick} className='Modifier'/>
    </AdminTabsStyled>
  )
}



const AdminTabsStyled = styled.div`
    z-index: 3;
    position: fixed;
    bottom: 23px;
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
