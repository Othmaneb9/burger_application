import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../../../../../reusable-ui/Input";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import UserContext from "../../../../../../../context/UserContext";
import ImagePreview from "../ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./getInputTextConfig";

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
      ...newProduct,
    };
    handleAddProduct(NewProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const inputTexts = getInputTextConfig(newProduct);

  return (
    <FormulaireStyle action="submit" onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} />
      <div className="input-style">
        {inputTexts.map((input) => (
          <Input key={input.id} {...input} onChange={handleChange} />
        ))}
        <PrimaryButton
          className={"button-ajouter"}
          label={"Ajouter un nouveau produit au menu"}
          type="submit"
        />
      </div>
      {isSubmitted && <SubmitMessage />}
    </FormulaireStyle>
  );
}

const FormulaireStyle = styled.form`
  display: flex;
  width: 880px;
  height: 160px;

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
