import './App.css';
import { useState } from "react"

function LoginPage() {
const [prenom, setPrenom] = useState("") 


const handleClick = () => {
  alert(`Bonjour ` + prenom)
}

const handleSubmit = (event) => {
  event.preventDefault();
}

const handleChange = (event) => {
  setPrenom(event.target.value);
}

  return (
    <div className="LoginPage">
    <h1>Bienvenue chez nous !</h1>
    <h2>Connectez vous</h2>
    <form action='submit' onSubmit={handleSubmit}>
      <input value = {prenom} type='text' id='name' required='required' placeholder='Entrez votre prénom' onChange={handleChange}></input>
      <button onClick={handleClick} >Accédez à votre Espace</button>
    </form>
    </div>
  );
}

export default LoginPage;
