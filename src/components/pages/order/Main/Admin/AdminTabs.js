import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import BottomButton from "../../../../reusable-ui/BottomButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OpenContext from "../../../../../context/OpenContext";
import UserContext from "../../../../../context/UserContext";

export default function AdminTabs() {
  const { isOpen, setIsOpen } = useContext(OpenContext);
  const { isAddSelected, setIsAddSelected, isEditSelected, setIsEditSelected } = useContext(UserContext);

  const SelectAddTabs = () => {
    setIsOpen(!isOpen);
    setIsEditSelected(false);
    setIsAddSelected(true);
  };
  const SelectEditTabs = () => {
    setIsOpen(!isOpen);
    setIsAddSelected(false);
    setIsEditSelected(true);
  };

  return (
    <AdminTabsStyled>
      <BottomButton
        onClick={() => setIsOpen(!isOpen)}
        Icon={isOpen ? <FiChevronDown /> : <FiChevronUp />}
        className={isOpen ? "is-active" : ""}
      />

      <BottomButton
        Icon={<AiOutlinePlus />}
        onClick={SelectEditTabs}
        label={" Ajouter un produit"}
        className={isAddSelected ? "is-active" : ""}
      />

      <BottomButton
        Icon={<MdModeEditOutline />}
        onClick={SelectAddTabs}
        label={" Modifier un produit"}
        className={isEditSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  position: relative;
  display: flex;
  margin-left: 71px;

  button {
    height: 43px;
    border-radius: 5px 5px 0px 0px;
    padding: 13px 22px 14px 22px;
    background-color: #292729;
    color: white;
    cursor: pointer;
    margin-left: 1px;
  }

  .is-active {
    background-color: white;
    color: grey;
    border-color: #e4e5e9;
  }
`;
