import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {

  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/Login')
  }  

  return (
    <div>
        <h1>ErrorPage</h1>
        <button type="submit" onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  )
}
