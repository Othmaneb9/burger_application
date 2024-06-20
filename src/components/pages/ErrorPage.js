import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './login/LoginPage'

export default function ErrorPage() {
  const handleClick = () => {
    <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
    </Routes>
  }  

  return (
    <div>
        <h1>ErrorPage</h1>
        <button type="submit" onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  )
}
