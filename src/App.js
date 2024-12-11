import'./logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";


import Header from './components/Headers.jsx'
import Main from './Pages/Main.jsx';
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact.jsx';
import Milk from './Pages/Milk';
import Ghee from './Pages/Ghee';
import All from './Pages/All';
import Curd from './Pages/Curd';
import Paneer from './Pages/Paneer';
import Compo from './Pages/Compo';
import Butter from './Pages/Butter';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import AddToCart from './Pages/AddToCart';
import Categorylist from './components/Categorylist';
import { useDispatch, useSelector } from "react-redux";
import Detail from './Pages/Detail';
import Address from './Pages/Address';
import Products from './Pages/Products';
import Search from './Pages/Search';
import Register from './Pages/Register';
import ForgetPass from './Pages/ForgetPass';

function App() {
  const cart = useSelector((state) => state.cart);
   const [aut, setAut] = useState();
  const auth = useSelector((state) => state.user.user);
  console.log(auth.loggedIn)
  const findDetail = [auth].filter(items => items.loggedIn === true);


  const datas={
    h1:"Home",
    h3:"About Us",
    h2:"Product",
    h4:"Blog",
    h5:"Contact Us",
  }

  const picture = [
    {
      linkto: "/Milk",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Milk",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },

    {
      linkto: "/Ghee",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/Zqwvc1A4oZQSr3lLpMOlX8odAYtjXbOnyueUdcG1.png",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Ghee",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },
    {
      linkto: "/Paneer",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/fSwtVeBVIXuSjbOx708FKP5mF3ehgCZVlS3wuUGJ.png",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Paneer",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },]
    console.log(cart.length,"ll")
    
  return (

    <>
    <BrowserRouter >
    {auth.header === true ? "" :<Header   data={datas} size={cart.length}/>}
      <Routes>
        <Route path="/product" element={<Product /> }/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/milk" element={<Milk/>}/>
        <Route path="/Ghee" element={<Ghee/>}/>
        <Route path="/curd" element={<Curd/>}/>
        <Route path="/paneer" element={<Paneer/>}/>
        <Route path="/combo" element={<Compo/>}/>
        <Route path="/buttermilk" element={<Butter/>}/>
        <Route path="/blog" element={<Blog datass={picture}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/add-to-cart" element={<AddToCart />}/>
        <Route path="/:slug" element={<Detail/>}/>
        <Route path="/:slugs" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/register" element={<Register/>}/>
       <Route path="/forgetpass" element={<ForgetPass/>}/>

      </Routes>
      
      { auth.header === true ? "" :  <Footer/>}
    </BrowserRouter>
    </>
  );
}

export default App;


