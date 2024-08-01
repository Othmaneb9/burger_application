import { useState } from "react";
import { fakeMenu } from "../components/fakeData/fakeMenu";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState();

  const handleAddProduct = (NewProduct, username) => {
    const UpdatedMenu = [NewProduct, ...menu];
    setMenu(UpdatedMenu);
    syncBothMenus(username, UpdatedMenu)
  };
  
  const handleDelete = (idOfProductToDelete, username) => {
    const NewMenu = [...menu].filter(
      (product) => product.id !== idOfProductToDelete
    );
    setMenu(NewMenu);
    syncBothMenus(username, NewMenu)
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
