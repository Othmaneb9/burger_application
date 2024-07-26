import { useState } from 'react'
import styled from 'styled-components'
import { formatPrice } from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card"
import { fakeMenu2 } from '../../../fakeData/fakeMenu'


export default function Menu() {
    const [menu, setmenu] = useState(fakeMenu2)


  return (
    <MenuStyled className="menu">
    {menu.map(({ id, imageSource, title, price }) =>(
        <Card 
              key={id}
              imageSource={imageSource}
              title={title}
              price={formatPrice(price)}
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
