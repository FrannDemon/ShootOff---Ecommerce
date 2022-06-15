import "./App.css";
import React from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Cards } from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from "./components/Register";
import { Cart } from "./components/Cart"
import { SingleProduct } from "./components/SingleProduct";
import UserAdmin from "./components/UserAdmin";
import AuthContextProvider from "./context/GlobalState";
import ReqContextProvider from "./context/RequestState";
import CartContextProvider from "./context/CartState";
import MyProfile from "./components/MyProfile";


function App() {

  return (
    <>
      <ReqContextProvider>
      <CartContextProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/users/admin" element={<UserAdmin />} />
          <Route path="/categories/:item" element={<Cards/>}/>
          <Route path="/users/:username" element={<MyProfile />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
      </CartContextProvider>
      </ReqContextProvider>
    </>
  );
}

export default App;
