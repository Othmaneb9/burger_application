import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import UserContext from "../../../../../../context/UserContext";
import { FiCheck } from "react-icons/fi";

export default function AddProduct() {
  const { handleAddProduct } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const NewProductToAdd = {
      id: crypto.randomUUID(),
      title: title,
      imageSource: imageSource,
      price: price,
    };
    handleAddProduct(NewProductToAdd);
    setTitle("");
    setImageSource("");
    setPrice(0);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange1 = (event) => {
    setTitle(event.target.value);
  };
  const handleChange2 = (event) => {
    setImageSource(event.target.value);
  };
  const handleChange3 = (event) => {
    setPrice(event.target.value);
  };

  return (
    <FormulaireStyle action="submit" onSubmit={handleSubmit}>
      <div className="image">
        {imageSource ? (
          <img src={imageSource} alt="Inconnue" />
        ) : (
          <p>Aucune Image</p>
        )}
      </div>
      <div className="input-style">
        <Input
          value={title}
          Icon={<FaHamburger className="icon" />}
          placeholder={"Nom du produit (ex : Super Burger)"}
          onChange={handleChange1}
        />
        <Input
          value={imageSource}
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien d'URL d'une image (ex : https://la-photo-de-mon-produit.png)"
          }
          onChange={handleChange2}
        />
        <Input
          value={price ? price : ""}
          Icon={<MdOutlineEuro className="icon" />}
          placeholder={"Prix"}
          onChange={handleChange3}
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
