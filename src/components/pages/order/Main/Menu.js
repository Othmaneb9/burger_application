import { useContext, useState } from 'react'
import styled from 'styled-components'
import { formatPrice } from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card"
import UserContext from '../../../../context/UserContext'
import { TiDelete } from 'react-icons/ti'
import DeleteItem from '../../../../utils/DeleteItem'


export default function Menu() {
    const {isModeAdmin, menu} = useContext(UserContext)

    const handleDelete = () => {
      DeleteItem();
  }

  return (
    <MenuStyled className="menu">
    {menu.map(({ id, imageSource, title, price }) =>(
        <Card 
              key={id}
              imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
              title={title}
              price={formatPrice(price)}
              Icon={isModeAdmin && <TiDelete/>}
              onClick={handleDelete}
        />
        )) }
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: #FFFFFF;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  scrollbar-width: none; /* Pour Firefox */
`
