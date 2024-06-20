import React from 'react';
import LoginForm from "./LoginForm";
import { Routes, Route } from 'react-router-dom';


function LoginPage() {
  return (
    <Routes>
       <Route path="/" element={<LoginForm />} ></Route>
  </Routes>
  );
}

export default LoginPage;
