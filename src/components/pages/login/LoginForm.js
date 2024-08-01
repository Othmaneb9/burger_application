import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { SlArrowRight } from "react-icons/sl";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authenticateUser(prenom)
    setPrenom("");
    navigate(`/OrderPage/${prenom}`);

  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <FormStyle action="submit" onSubmit={handleSubmit}>
      <Welcome/>
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
