import { FiSearch } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { LuWalletCards } from "react-icons/lu";
import { login } from "../Redux/AuthSlice";

// import Button1 from "../Pages/Button1";

const Header = (props) => {
  const [current, setCurrent] = useState("Home");

  const changeColor = (name) => {
    setCurrent(name);
  };
  const { slug } = useParams();

  const dispatch = useDispatch();
  

 

  // const { loginWithRedirect } = useAuth0();

  
 const [aut, setAut] = useState();
  const auth = useSelector((state) => state.user.user);
  // console.log(auth.loggedIn)
  // const findDetail = [auth].filter(items => items.loggedIn === true);


  const [head, setHeader] = useState();
  const headerHide = () => {
    dispatch(login({
      header:true}))

    // const findDetail = [auth].filter(items => items.header === false);

  }
   
 
 
  return (
    <>
      <div className="fixed-top ">
        <div className="container-flued bg-white px-4 headers  ">
          <div className="container-flued  ">
            <header className="d-flex  align-items-center justify-content-between justify-content-md-between py-1    ">
              <img
                src={"https://pravarshaindustries.com/img/pravarsha-logo.png"}
                alt=""
                className="h-8 md:w-full"
              />
              {/* <div className="col-md-4 text-end ">  */}
              <div className="d-flex  align-items-center justify-content-between ">
                <Link
                  to="/add-to-cart"
                  className=" text-center px-2 py-1 mx-2 shop-icon mx-2"
                >
                  <BsCart3 />
                </Link>
                <Link className="px-2 py-1 mx-2 search-icon  mx-2" to="/search">
                  <FiSearch className="h-100 w-100" />
                </Link>
                <Link to="/login" className={`text-center admin-icon px-2 py-1 mx-2      ${
                    auth.loggedIn === true ? "d-block" : "d-none"
                  }`}>
                  < HiOutlineUser />
                </Link>

                <Link to="/login" className={`text-center admin-icon px-2 py-1 mx-2      ${
                    auth.loggedIn === true ? "d-block" : "d-none"
                  }`}>
                   < LuWalletCards />
                </Link>
                
                <button
                  type="button"
                  className={`btn login-button login-signup-btn mx-1 rounded-5      ${
                    auth.loggedIn=== true ? "d-none" : "d-block"
                  }`}
                 
                >
                  {/* {<Link onClick={() => loginWithRedirect()}>Login/Signup</Link>} */}
                 


               
                  <Link onClick={headerHide} to="/Register">Signin/Signup</Link> 
                </button>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  d-block d-lg-none ">
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
                      <ul className="navbar-nav d-flex justify-content-between w-100">
                        <li className="nav-item ">
                          <Link to="/" className="nav-link  header-fon-size  ">
                            {props.data.h1}
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            to="/product"
                            className="nav-link header-fon-size "
                          >
                            {props.data.h2}
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            to="/about-us"
                            className="nav-link header-fon-size "
                          >
                            {props.data.h3}
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            className="nav-link header-fon-size "
                            to="/blog"
                          >
                            {props.data.h4}
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link
                            to="/contact-us"
                            className="nav-link header-fon-size "
                          >
                            {props.data.h5}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* </div> */}
            </header>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block border-bottom border-top ">
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
              <ul className="navbar-nav d-flex justify-content-between w-100">
                <li className="nav-item " onClick={() => changeColor("Home")}>
                  <Link
                    to="/"
                    className={`nav-link  header-fon-size    ${
                      current === "Home" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h1}
                  </Link>
                </li>
                <li
                  className="nav-item "
                  onClick={() => changeColor("Product")}
                >
                  <Link
                    to="/product"
                    className={`nav-link  header-fon-size   ${
                      current === "Product" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h2}
                  </Link>
                </li>
                <li
                  className="nav-item "
                  onClick={() => changeColor("About-us")}
                >
                  <Link
                    to="/about-us"
                    className={`nav-link  header-fon-size   ${
                      current === "About-us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h3}
                  </Link>
                </li>
                <li className="nav-item " onClick={() => changeColor("Blog")}>
                  <Link
                    className={`nav-link  header-fon-size  ${
                      current === "Blog" ? "text-success" : ""
                    }`}
                    to="/blog"
                  >
                    {props.data.h4}
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => changeColor("Contact Us")}
                >
                  <Link
                    to="/contact-us"
                    className={`nav-link  header-fon-size ${
                      current === "Contact Us" ? "text-success" : ""
                    }`}
                  >
                    {props.data.h5}
                  </Link>
                </li>
                {/* { navbar.map((data)=> <Button1 p={data}/>)} */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
