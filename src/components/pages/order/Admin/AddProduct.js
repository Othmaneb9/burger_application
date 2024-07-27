import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function AddProduct() {
  const [productName, setProductName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProductName("");
    console.log(`producName :  ${productName}`);
  };
  const handleChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <FormulaireStyle action="submit" onSubmit={handleSubmit}>
      <div className="image">
        <p>Aucune Image</p>
      </div>
      <div className="input-style">
        <Input
          Icon={<FaHamburger className="icon" />}
          onChange={handleChange}
          placeholder={"Nom du produit (ex : Super Burger)"}
        />
        <Input
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien d'URL d'une image (ex : https://la-photo-de-mon-produit.png)"
          }
        />
        <Input Icon={<MdOutlineEuro className="icon" />} placeholder={"Prix"} />
        <PrimaryButton
          className={"button-ajouter"}
          label={"Ajouter un nouveau produit au menu"}
        />
      </div>
    </FormulaireStyle>
  );
}
const FormulaireStyle = styled.form`
  margin-left: 71px;
  margin-top: 31px;
  display: flex;
  width: 880px;
  height: 160px;

  .image {
    margin-right: 20px;
    border: 1px solid #e4e5e9;
    border-radius: 5px;
    width: 215px;
    height: 120px;

    p {
      color: #93a2b1;
      font-family: "Open Sans";
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .input-style {
    width: 645px;
    height: 121px;
    display: grid;
    grid-template-rows: 35px 35px 35px;
    row-gap: 15px;
  }
  .button-ajouter {
    margin-top: 8px;
    width: 275px;
    height: 34px;
    background-color: #60bd4f;
    border-color: #60bd4f;
    font-size: 12px;

    &:hover {
      background-color: white;
      color: #60bd4f;
    }
  }
`;
