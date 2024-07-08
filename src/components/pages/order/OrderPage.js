import React from "react";
import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const { prenom } = useParams();

  //comportement

  //affichage

  return (
    <div>
      <h1>Bonjour {prenom} </h1>
      <Link to="/Login">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
