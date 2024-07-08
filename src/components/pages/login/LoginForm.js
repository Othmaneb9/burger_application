import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { SlArrowRight } from "react-icons/sl";

function LoginForm() {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrenom("");
    navigate(`/OrderPage/${prenom}`);
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <FormStyle action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <Input
        Icon={<BsPersonCircle />}
        value={prenom}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
      />
      
      
      <PrimaryButton label={"Accéder à mon Espace"} Icon={<SlArrowRight />} />

    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: -60px;
  text-align: center;
  justify-content: center;
  width: 464px;
  font-family: "Amatic SC";

  hr {
    background-color: #f56a2c;
    width: 400px;
    height: 3px;
    border-width: 0;
  }

  h1 {
    color: white;
    font-size: 48px;
  }
  h2 {
    color: white;
    font-weight: 700;
    font-size: 36px;
  }
  svg {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }
`;

export default LoginForm;
