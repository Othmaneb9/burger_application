import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import UserContext from "../../../../../../context/UserContext";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddProduct() {
  const { handleAddProduct } = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();

    const NewProductToAdd = {
      id: crypto.randomUUID(),
      title: newProduct.title,
      imageSource: newProduct.imageSource,
      price: newProduct.price,
    };
    handleAddProduct(NewProductToAdd);
    setNewProduct("");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  return (
    <FormulaireStyle action="submit" onSubmit={handleSubmit}>
      <div className="image">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="Inconnue" />
        ) : (
          <p>Aucune Image</p>
        )}
      </div>
      <div className="input-style">
        <Input
          name="title"
          value={newProduct.title}
          Icon={<FaHamburger className="icon" />}
          placeholder={"Nom du produit (ex : Super Burger)"}
          onChange={handleChange}
        />
        <Input
          name="imageSource"
          value={newProduct.imageSource}
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien d'URL d'une image (ex : https://la-photo-de-mon-produit.png)"
          }
          onChange={handleChange}
        />
        <Input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          Icon={<MdOutlineEuro className="icon" />}
          placeholder={"Prix"}
          onChange={handleChange}
        />
        <PrimaryButton
          className={"button-ajouter"}
          label={"Ajouter un nouveau produit au menu"}
          type="submit"
        />
      </div>
      {isSubmitted && (
        <p>
          <FiCheck /> Ajouté avec succès
        </p>
      )}
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
