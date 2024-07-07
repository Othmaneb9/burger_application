import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import Input from './Input';

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
    <FormStyle action='submit' onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>  
      <hr/>
      <h2>Connectez-vous</h2>
      <BsPersonCircle/>
      <Input value={prenom} onChange={handleChange} placeholder={"Entrez votre prénom"}/>
      <button type="submit">Accéder à mon Espace &nbsp; &gt;</button>
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
   
    
    hr{
        background-color: #F56A2C;
        width : 400px;
        height : 3px;
        border-width: 0;
    }
    button{
        width: 400px;
        height: 55px;
        background-color: #FF9F1B;
        color: white;
        border-radius: 5px;
        border-color: #FF9F1B;
        font-size: 15px;
    }
    button:hover{
        background-color: white;
        color: #FF9F1B;
        cursor: pointer;
    }
    h1{
      color : white;
      font-family: 'Amatic SC';
      font-weight: 700;
      font-size: 48px;
    }
    h2{
      color : white;
      font-family: 'Amatic SC';  
      font-weight: 700;
      font-size: 36px;
    }
    svg{
      color: grey;
      position: relative;
      left: 35px;
      top: 3px;
      width: 15px;
      height: 15px;
      z-index: 1;
    }
`


export default LoginForm;
