import { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import UserContext from "../../../../context/UserContext";
import { TiDelete } from "react-icons/ti";
import EmptyMenuAdmin from "./Empty/EmptyMenuAdmin";
import EmptyMenuClient from "./Empty/EmptyMenuClient";

export default function Menu() {
  const {
    prenom,
    isModeAdmin,
    menu,
    handleDelete,
    resetMenu,
    setProductSelected,
    handleAddBasket,
  } = useContext(UserContext);

  const handleClick = async (IdOfProduct, ) => {
    const newProduct = menu.find((product) => product.id === IdOfProduct);
    await setProductSelected(newProduct);
  };

  if (menu.length === 0) {
    if (isModeAdmin) {
      return <EmptyMenuAdmin onReset={resetMenu} />;
    }
    return <EmptyMenuClient />;
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
          onDelete={() => handleDelete(id, prenom)}
          onClick={() => handleClick(id)}
          onAddProduct={() => handleAddBasket(id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  scrollbar-width: none; /* Pour Firefox */
`;
