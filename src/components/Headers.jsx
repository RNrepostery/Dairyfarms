import { FiSearch } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { LuWalletCards } from "react-icons/lu";
import { login } from "../Redux/AuthSlice";

const Header = (props) => {
  const [current, setCurrent] = useState("Home");
  const { slug } = useParams();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.user.user);

  const [head, setHeader] = useState();
  const headerHide = () => {
    dispatch(login({ header: true }));
  };

  const changeColor = (name) => {
    setCurrent(name);
  };

  return (
    <>
      <div className="fixed-top">
        <div className="container-flued bg-white px-4 headers">
          <div className="container-flued">
            <header className="d-flex align-items-center justify-content-between py-1">
              <img
                src={"https://pravarshaindustries.com/img/pravarsha-logo.png"}
                alt=""
                className="h-8 md:w-full"
              />
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  to="/add-to-cart"
                  className="text-center px-2 py-1 mx-2 shop-icon"
                >
                  <BsCart3 />
                </Link>
                <Link className="px-2 py-1 mx-2 search-icon" to="/search">
                  <FiSearch className="h-100 w-100" />
                </Link>

                <Link
                  to="/login"
                  className={`text-center admin-icon px-2 py-1 mx-2 ${
                    auth.loggedIn === true ? "d-block" : "d-none"
                  }`}
                >
                  <HiOutlineUser />
                </Link>

                <Link
                  to="/login"
                  className={`text-center admin-icon px-2 py-1 mx-2 ${
                    auth.loggedIn === true ? "d-block" : "d-none"
                  }`}
                >
                  <LuWalletCards />
                </Link>

                <button
                  type="button"
                  className={`btn login-button login-signup-btn mx-1 rounded-5 ${
                    auth.loggedIn === true ? "d-none" : "d-block"
                  }`}
                >
                  <Link onClick={headerHide} to="/Register">
                    Signin/Signup
                  </Link>
                </button>
              </div>
            </header>
          </div>
        </div>

        {/* Mobile Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-block d-lg-none border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link header-fon-size ${
                      current === "Home" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h1}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/product"
                    className={`nav-link header-fon-size ${
                      current === "Product" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h2}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about-us"
                    className={`nav-link header-fon-size ${
                      current === "About-us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h3}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className={`nav-link header-fon-size ${
                      current === "Blog" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h4}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact-us"
                    className={`nav-link header-fon-size ${
                      current === "Contact Us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h5}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Desktop Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block border-bottom">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-between w-100">
                <li className="nav-item" onClick={() => changeColor("Home")}>
                  <Link
                    to="/"
                    className={`nav-link header-fon-size ${
                      current === "Home" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h1}
                  </Link>
                </li>
                <li className="nav-item" onClick={() => changeColor("Product")}>
                  <Link
                    to="/product"
                    className={`nav-link header-fon-size ${
                      current === "Product" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h2}
                  </Link>
                </li>
                <li className="nav-item" onClick={() => changeColor("About-us")}>
                  <Link
                    to="/about-us"
                    className={`nav-link header-fon-size ${
                      current === "About-us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h3}
                  </Link>
                </li>
                <li className="nav-item" onClick={() => changeColor("Blog")}>
                  <Link
                    to="/blog"
                    className={`nav-link header-fon-size ${
                      current === "Blog" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h4}
                  </Link>
                </li>
                <li className="nav-item" onClick={() => changeColor("Contact Us")}>
                  <Link
                    to="/contact-us"
                    className={`nav-link header-fon-size ${
                      current === "Contact Us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h5}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
