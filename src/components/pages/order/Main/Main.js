import styled from "styled-components"
import Card from "../../../reusable-ui/Card"
import { fakeMenu2 } from '../../../fakeData/fakeMenu'
import { formatPrice } from "../../../../utils/maths"
import { useState } from "react"


export default function Main() {
  const [menu, setmenu] = useState(fakeMenu2)

  return (
    <MainStyled>
        {menu.map(({ id, imageSource, title, price }) =>(
          <Card 
                key={id}
                imageSource={imageSource}
                title={title}
                price={formatPrice(price)}
          />
          )) }    
    </MainStyled>
  )
}





const MainStyled = styled.div`
    background: #F5F5F7;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap : 20px;
    grid-row-gap: 60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;
   
`