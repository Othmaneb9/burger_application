import { useState } from "react"

function LoginPage() {
// state
const [prenom, setPrenom] = useState("") 

// comportements
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Bonjour ` + prenom)
  setPrenom("")
}

const handleChange = (event) => {
  setPrenom(event.target.value);
}

// Affichage
  return (
    <div className="LoginPage">
    <h1>Bienvenue chez nous !</h1><br/>
    <h2>Connectez vous</h2>
    <form action='submit' onSubmit={handleSubmit}>
      <input value = {prenom} type='text' id='name' required='required' placeholder='Entrez votre prénom' onChange={handleChange}></input>
      <button>Accédez à votre Espace</button>
    </form>
    </div>
  );
}

export default LoginPage;
