import React, { useState } from "react";
import { AllproductStore } from '../components/AllproductStore';


import slider from "../Assets/static/slider-1-image.png";
import sliderI from "../Assets/static/slider-2-image.png";
import slider3 from "../Assets/static/slider-3-image.png";
import footer3 from "../Assets/static/footer-image-3.jpg";
import header1 from "../Assets/static/header-img-1.png";
import header2 from "../Assets/static/header-img-2.png";

import adver1 from "../Assets/static/advertisement-image-1.png";
import adver2 from "../Assets/static/advertisement-image-2.png";
import adver3 from "../Assets/static/advertisement-image-3.png";



import card1 from "../Assets/static/card1.webp";
import card18 from "../Assets/static/card18.jpg";
import card19 from "../Assets/static/card19.jpg";
import card20 from "../Assets/static/card20.jpg";
import card21 from "../Assets/static/card21.jpg";
import Advertisemnet from "../components/Advertisemnet";


import cardi0 from "../Assets/static/card1.webp";
import cardi1 from "../Assets/static/card1.1.webp";
import cardi2 from "../Assets/static/card1.2.webp";
import cardi3 from "../Assets/static/card1.3.png";
import card2 from "../Assets/static/card2.png";
import card3 from "../Assets/static/card3.png";
import card4 from "../Assets/static/card4.png";
import card5 from "../Assets/static/card5.png";
import card6 from "../Assets/static/card6.png";
import card7 from "../Assets/static/card7.png";
import card8 from "../Assets/static/card8.webp";
import card9 from "../Assets/static/card9.webp";
import card10 from "../Assets/static/card10.webp";
import card11 from "../Assets/static/card11.webp";
import card12 from "../Assets/static/card12.webp";
import card13 from "../Assets/static/card13.webp";
import card14 from "../Assets/static/card14.jpg";
import card15 from "../Assets/static/card15.jpg";
import card16 from "../Assets/static/card16.jpg";
import card17 from "../Assets/static/card17.jpg";

import Card4 from "../components/Card4";

function Main(props) {

  
  

  const findDetail = AllproductStore.filter(items => items.quantity === 1); 

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
    },
    {
      linkto: "/curd",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/LosArkXiOtsKDygwuXk6lEHmsOMvlh3NME6WcRQy.png",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Curd",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },
    {
      linkto: "/curd",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/9oAAGs0MVsEGL5R3N4miPzPE9YR3Nhadwf9vvR5O.png",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Curd",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },
    {
      linkto: "/curd",
      imgsrc:
        "https://pravarshaindustries.com/storage/subcategories/DcI6c6kqlRksHXcAE3kASEP9uUeZHF4pdguDMA1K.webp",
      imgclassName: "rounded-circle hovers p-2",
      h4className: "text-center mt-1  text-xl md:text-2xl",
      h4name: "Curd",
      divclassName: "col-md-6  col-sm-6 col-lg-2 col-6 link-style",
    },
  ];

  

 
  const [cards4, setCards4] = useState([
    {
      id: "18",
      quantity: 1,
      slug:"product-18",
      imgclassName: "card-img-top img-fluid is p-4 card-imgs ",
      imgsrc: card18,

      titleName: "Farm Fresh Non Homogenised Cow Milk",

      discountPriceName: 37,

      orginalPriceName: "₹ 38",
      categories:"milk",

    

    
    },
    {
      id: "19",
      quantity: 1,
      slug:"product-19",
      imgclassName: "card-img-top img-fluid p-4 pb-4 is card-imgs pb-0",
      imgsrc: card19,

      titleName: "Farm Fresh Non Homogenised Cow Milk",

      discountPriceName: 37,

      orginalPriceName: "₹ 38",
      categories:"combo",

    

    
    },

    {
      id: "20",
      quantity: 1,
      slug:"product-20",
      imgclassName: "card-img-top img-fluid p-3 is  card-imgs pb-0",
      imgsrc: card20,

      titleName: "Farm Fresh Non Homogenised Cow Milk",

      discountPriceName: 37,

      orginalPriceName: "₹ 38",
      categories:"combo",

    

    
    },

    {
      id: "21",
      quantity: 1,
      slug:"product-21",
      imgclassName: "card-img-top img-fluid is p-4 pb-4 card-imgs pb-0",
      imgsrc: card21,

      titleName: "Farm Fresh Non Homogenised Cow Milk",

      discountPriceName: 37,

      orginalPriceName: "₹ 38",
      categories:"combo",

    

    
    },
    {
      id: "22",
      quantity: 1,
      slug:"product-22",
      imgclassName: "card-img-top img-fluid pt-0  card-imgs pb-0",
      imgsrc: card1,

      titleName: "Farm Fresh Non Homogenised Cow Milk",

      discountPriceName: 37,

      orginalPriceName: "₹ 38",
      categories:"milk",

    

    
    },
  ]);

  return (
    <div>
      <>
        <div className="  container-lg container-flued cont  ">
          <div className="row  ">
            <div className="col-lg-7  col-md-12 col-sm-12 col-12 ">
              {/* Hello world */}
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={slider}
                      className="d-block w-100 slider-image-height"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={sliderI}
                      className="d-block w-100 slider-image-height"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slider3}
                      className="d-block w-100 slider-image-height"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <price
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></price>
                  <price className="visually-hidden">Previous</price>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <price
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></price>
                  <price className="visually-hidden">Next</price>
                </button>
              </div>

              {/* <img src={log alt="" class="i1 m-1 shadow rounded-4" /> */}
              {/* <FaAmazon/> */}
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="d-block">
                <img
                  src={header1}
                  alt=""
                  class="  i2 m-2 shadow rounded-4 d-none d-lg-block"
                />
                <img
                  src={header2}
                  alt=""
                  class=" i3 m-2  shadow rounded-4 d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-xl font-bold md:text-3xl fw-bold text-center my-5 md:my-10">
          All Farm Fresh Products At One Place...
        </h3>

        <div className=" row container-flued   col lg-12 d-flex justify-content-center circle-img px-5  text-center ">
          {picture.map((da) => {
            return <Advertisemnet im={da} />;
          })}
        </div>

        <div className="container-flued d-flex justify-evenly px-5 mx-5 py-5">
          <div>
            <img
              src={adver1}
              alt=""
              className="free-img d-none d-lg-block
      "
            />
          </div>
          <div>
            <img
              src={adver2}
              alt=""
              className="free-img d-none d-lg-block
      "
            />
          </div>
          <div>
            <img
              src={adver3}
              alt=""
              className="free-img d-none d-lg-block
      "
            />
          </div>
        </div>

        <h1 class="text-xl font-bold md:text-3xl text-center my-2 md:my-10">
          Kuch Healthy Ho Jaye...
        </h1>

        <div className="container p-4">
          <div className="row">
            {findDetail.map((data) => (
              <Card4 card={data} />
            ))}
          </div>
        </div>

        {/* <Contact Contact cards4={cards4} /> */}

        <h2 class="text-xl font-bold fw-bold md:text-3xl text-center py-2 fw md:my-10">
          New Arrivals
        </h2>

        <div className="container p-4">
          <div className="row">
            {cards4.map((data) => (
              <Card4 card={data} />
            ))}
          </div>
        </div>

        <>
          <div class="text-center  d-none d-lg-block">
            <img
              className="banner-img"
              src="https://pravarshaindustries.com/storage/banners/QnL5HRo5Q6xuyNHeIYMius7nDDvk8Hr8klbzS6ma.webp"
              alt=""
            />
          </div>
          <div className="text-center d-block d-lg-none">
            <img
              className="banner-img "
              src="https://pravarshaindustries.com/storage/banners/70mNpMidUhNaMT0Zjf2t91yaGeDs2khGvQJMrlDh.jpg"
              alt=""
            />
          </div>
        </>

        <div class="mx-auto pt-2 text-center">
          <img src={footer3} alt="" class="f-img" />
        </div>
      </>
    </div>
  );
}

export default Main;
