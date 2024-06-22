import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/OrderPage/:prenom" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} ></Route>

    </Routes>
  );
}

export default App;
