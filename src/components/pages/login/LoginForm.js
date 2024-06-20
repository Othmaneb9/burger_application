import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderPage from '../OrderPage';

function LoginForm() {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrenom("");
    navigate(OrderPage);
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1><br />
      <h2>Connectez-vous</h2>
      <input value={prenom} type='text' id='name' required='required' placeholder='Entrez votre prénom' onChange={handleChange} />
      <button type="submit">Accédez à votre Espace</button>
    </form>
  );
}

export default LoginForm;
