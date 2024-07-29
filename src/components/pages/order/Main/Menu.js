import { useContext, useRef } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import UserContext from "../../../../context/UserContext";
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function Menu() {
  const { isModeAdmin, menu, handleDelete, resetMenu, setProductSelected } = useContext(UserContext);
  const inputBaliseRef = useRef();

  const handleClick = (IdOfProduct) => {
    const newProduct = menu.find((product) => product.id === IdOfProduct);
    setProductSelected(newProduct);
    inputBaliseRef.current.focus();
  };

  if(menu.length === 0){
    if(isModeAdmin){
    return <EmptyMenuAdmin onReset={resetMenu} />
    }
    return <EmptyMenuClient/>
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          imageSource={imageSource ? imageSource : "/img/coming-soon.png"}
          title={title}
          price={formatPrice(price)}
          Icon={isModeAdmin && <TiDelete />}
          onDelete={() => handleDelete(id)}
          onClick={() => handleClick(id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  scrollbar-width: none; /* Pour Firefox */
`;
