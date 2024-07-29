import React, { useContext } from "react";
import UserContext from "../../../../../../context/UserContext";
import styled from "styled-components";
import Input from "../../../../../reusable-ui/Input";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

export default function EditProduct() {
  const { productSelected, setProductSelected } = useContext(UserContext);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <FormulaireStyle action="submit">
      <div className="image">
        {productSelected.imageSource ? (
          <img src={productSelected.imageSource} alt="Inconnue" />
        ) : (
          <p>Aucune Image</p>
        )}
      </div>
      <div className="input-style">
        <Input
          value={productSelected.title}
          Icon={<FaHamburger className="icon" />}
          placeholder={"Nom du produit (ex : Super Burger)"}
          onChange={handleChange}
        />
        <Input
          value={productSelected.imageSource}
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien d'URL d'une image (ex : https://la-photo-de-mon-produit.png)"
          }
          onChange={handleChange}
        />
        <Input
          value={productSelected.price ? productSelected.price : ""}
          Icon={<MdOutlineEuro className="icon" />}
          placeholder={"Prix"}
          onChange={handleChange}
        />
      </div>
    </FormulaireStyle>
  );
}

const FormulaireStyle = styled.form`
  display: flex;
  width: 880px;
  height: 160px;

  .image {
    margin-right: 20px;
    margin-top: 18px;
    border: 1px solid #e4e5e9;
    border-radius: 5px;
    width: 215px;
    height: 120px;
    img {
      width: 100px;
      height: auto;
    }

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
