import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import backgroundIm from "../../img/backgroundBurger.jpg";
import logo from "../../img/logo-orange.png";
import { VscAccount } from "react-icons/vsc";

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
    <BackgroundContainer>
    <ParagrapheBalise> CRAZEE 
      <img src= {logo} alt="Logo"/>
      BURGER </ParagrapheBalise>
      <FormStyle onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>  
      <hr/>
      <h2>Connectez-vous</h2>
      <VscAccount/>
      <input value={prenom} type='text' id='name' required='required' placeholder='Entrez votre prénom' onChange={handleChange} />
      <button type="submit">Accéder à mon Espace &nbsp; &gt;</button>
    </FormStyle>
    </BackgroundContainer>
  );
}
const ParagrapheBalise = styled.p`
  font-size: 110px;
  font-family: 'Amatic SC';
  color: #FFA01B;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  img{
    width: 200px;
    height: 150px;
    position: relative;
    top : 30px;
  }
`

const BackgroundContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: url(${backgroundIm}); 
   background-size: cover;
   overflow: hidden;
`

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
    input{
        position: relative;
        right : 8px;
        width: 350px;
        height: 55px;
        border-radius: 5px;
        border-width: 0;
        margin-bottom: 18px;
        padding-left: 50px; 
        justify-content: center;
    }
    input::placeholder {
          position: relative;
          left: 20px;
          color: #D3D3D3;
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
