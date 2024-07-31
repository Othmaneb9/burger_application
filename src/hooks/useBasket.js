import { useContext, useState } from "react";
import { fakeBasket } from "../components/fakeData/fakeBasket";
import UserContext from "../context/UserContext";

export const useBasket = () => {
  const { menu } = useContext(UserContext);
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  const [quantity, setQuantity] = useState(1);

  const handleAddBasket = async (NewProduct) => {
    const nouveauProduit = menu.find((produit) => NewProduct === produit.id);
    if (basket.id === basket.NewProduct) {
      const newQuantity = 1 + quantity;
      await setQuantity(newQuantity);
    }

    const newBasket = [nouveauProduit, ...basket];
    await setBasket(newBasket);
  };

  const handleDeleteBasket = async (newDelete) => {
    const deleteBasket = [...basket].filter(
      (product) => newDelete !== product.id
    );
    await setBasket(deleteBasket);
  };

  return { basket, handleAddBasket, handleDeleteBasket };
};
