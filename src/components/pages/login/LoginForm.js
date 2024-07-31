import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { SlArrowRight } from "react-icons/sl";
import { createUser, getUser } from "../../../api/user";

export default function LoginForm() {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const existingUser = await getUser(prenom);
    if (existingUser) {
      navigate(`/OrderPage/${prenom}`);
    } else {
      await createUser(prenom);
      navigate(`/OrderPage/${prenom}`);
    }
    setPrenom("");
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <FormStyle action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <Input
          Icon={<BsPersonCircle className="icon" />}
          value={prenom}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
        />

        <PrimaryButton
          label={"Accéder à mon Espace"}
          Icon={<SlArrowRight className="icon" />}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px 32px;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: (8 * 5) px;
  }

  h1 {
    color: #ffffff;
    font-size: 48px;
  }

  h2 {
    margin: 20px 10px 10px;
    color: #ffffff;
    font-size: 36px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
