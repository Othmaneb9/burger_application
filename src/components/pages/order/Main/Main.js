import styled from "styled-components"
import Card from "./Card"
import { fakeMenu2 } from '../../../fakeData/fakeMenu'
import { formatPrice } from "../../../../utils/maths"


export default function Main() {
  return (
    <MainStyled>
        {fakeMenu2.map(item =>(
          <Card key={item.id}
                imageSource={item.imageSource}
                title={item.title}
                price={formatPrice(item.price)}
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
