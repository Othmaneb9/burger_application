import React, { useContext } from "react";
import UserContext from "../../../../../../context/UserContext";
import styled from "styled-components";
import Input from "../../../../../reusable-ui/Input";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./AddProduct/getInputTextConfig";

export default function EditProduct() {
  const { productSelected, setProductSelected, handleEdit, inputBaliseRef } =
    useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const produitToEdit = { ...productSelected, [name]: value };
    setProductSelected(produitToEdit);
    handleEdit(produitToEdit);
  };

  const inputTexts = getInputTextConfig(productSelected);

  return (
    <FormulaireStyle>
      <ImagePreview imageSource={productSelected.imageSource} />
      <div className="input-style">
        {inputTexts.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            ref={input.name === "title" ? inputBaliseRef : null}
          />
        ))}
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
