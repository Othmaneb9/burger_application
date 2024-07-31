import { useState } from "react";
import { fakeMenu } from "../components/fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAddProduct = (NewProduct) => {
    const UpdatedMenu = [NewProduct, ...menu];
    setMenu(UpdatedMenu);
  };
  
  const handleDelete = (idOfProductToDelete) => {
    const NewMenu = [...menu].filter(
      (product) => product.id !== idOfProductToDelete
    );
    setMenu(NewMenu);
  };

  const handleEdit = (productToEdit) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productToEdit.id
    );
    menuCopy[indexOfProductToEdit] = productToEdit;
    setMenu(menuCopy);
  };
  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDelete,
    handleEdit,
    resetMenu,
  };
};