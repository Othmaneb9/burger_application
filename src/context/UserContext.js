import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},
  isAddSelected: false,
  setIsAddSelected: () => {},
  menu: [],
  setMenu: () => {},
  handleAddProduct: () => {},
  handleDelete: () => {},
  productSelected: {},
  setProductSelected: () => {},
  resetMenu : () => {}
});
