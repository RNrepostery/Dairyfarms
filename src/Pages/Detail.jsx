import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/CartSlice";
import { AllproductStore } from "../components/AllproductStore";
import { Link } from "react-router-dom";
import Milk from "./Milk";
import Ghee from "./Ghee";
import Paneer from "./Paneer";
import Curd from "./Curd";
import Compo from "./Compo";
import Card4 from "../components/Card4";

function Detail(props) {
  const cart = useSelector((state) => state.cart);
  
  const { slug } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const findDetail = AllproductStore.filter(
      (AllproductStore) => AllproductStore.slug === slug
    );
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  const [imgdetail, setImgdetail] = useState();
  const Changeimage = (im) => ((detail.src0 = im), setImgdetail(detail.imgsrc));

  const [cat, setCat] = useState();

  useEffect(() => {
    if (detail.categories === "") {
      setCat();

    } else if (detail.categories === "curd") {
       const findDetail = AllproductStore.filter(items => items.categories === 'curd');
      setCat(<div className="container p-4">
      <div className="row">
        {findDetail.map((data) => (
          <Card4 card={data} />
        ))}
      </div>
    </div>);

    } else if (detail.categories === "milk") {
      const findDetail = AllproductStore.filter(items => items.categories === 'milk');
      setCat(<div className="container p-4">
      <div className="row">
        {findDetail.map((data) => (
          <Card4 card={data} />
        ))}
      </div>
    </div>);

    } else if (detail.categories === "paneer") {
      const findDetail = AllproductStore.filter(items => items.categories === 'paneer');
      setCat(<div className="container p-4">
      <div className="row">
        {findDetail.map((data) => (
          <Card4 card={data} />
        ))}
      </div>
    </div>);

    } else if (detail.categories === "ghee") {
      const findDetail = AllproductStore.filter(items => items.categories === 'ghee');
      setCat(<div className="container p-4">
      <div className="row">
        {findDetail.map((data) => (
          <Card4 card={data} />
        ))}
      </div>
    </div>);

    } else if (detail.categories === "combo") {
      const findDetail = AllproductStore.filter(items => items.categories === 'combo');
      setCat(<div className="container p-4">
      <div className="row">
        {findDetail.map((data) => (
          <Card4 card={data} />
        ))}
      </div>
    </div>);
    }
  });
  // console.log(detail.categories, cat, "uc");

  const [quantity, setQauntity] = useState(1);

  const handleMinusQuantity = () => {
    setQauntity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQauntity(quantity + 1);
  };

  const dispatch = useDispatch()
  
  const handleAddToCart = () =>{
    dispatch(add({
      productId:detail.id,
      quantity:quantity,
      images:detail.imgsrc,
      
      discountprice:detail.discountPriceName
    }))

   
  }


  return (
    <>
      <div className="container  mt-5  py-5 ">
        <div className="row pt-5 ">
          <div className="col-lg-6 text-center card mt-4">
            <div className="">
              <img
                className="card-img-top img-fluid image-detail-size  py-2"
                src={detail.src0}
              />
            </div>
          </div>

          <div className="col-lg-6 mt-3">
            <div className="fs-4 py-2"> {detail.titleName}</div>
            <div className="fs-5">
              {detail.discountPriceName} <span></span>/500ml{" "}
            </div>
            <div className="fs-5 text-success">in stock</div>
            <div className=" fw-dark py-2 text-danger">
              Add before 9:00 PM for next day delivery.
            </div>
            <div className="fs-5">Description</div>
            <div className=" fw-dark py-2 text-dark">{detail.description}</div>
            <div className="fs-5">Nutrition Information</div>
            <div className=" fw-dark py-2 text-dark">{detail.info}</div>
            <p className="card-text p-2  line-height-card-rate">
              <button
                className="minus"
                aria-label="Decrease"
                onClick={() => handleMinusQuantity()}
              >
                −
              </button>
              <input
                type="number"
                className="input-box text-center"
                value={quantity}
                min={1}
                max={5}
              />
              <button
                className="plus"
                aria-label="Increase"
                id="addToCartButton"
                onClick={() => handlePlusQuantity()}
              >
                +
              </button>
              <button className=" round-2  text-light bg-dark  mx-3 p-1"  onClick={handleAddToCart}>
              ADD To Cart
            </button>
            </p>
            <div className="">
              <Link to="/address">
                <span className=" rounded-pill  text-light bg-success px-4 py-2 ">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="cotainer">
          <div className="row mx-5  px-4">
            <div className="row px-4 m">
              <button
                className="col-lg-1 card"
                onClick={() => Changeimage(detail.imgsrc)}
              >
                <img
                  className="card-img-top img-fluid p-2  w-100 h-100"
                  src={detail.imgsrc}
                />
              </button>
              <button
                className="col-lg-1 card"
                onClick={() => Changeimage(detail.src1)}
              >
                <img
                  className="card-img-top img-fluid p-2  w-100 h-100"
                  src={detail.src1}
                />
              </button>
              <button
                className="col-lg-1 card"
                onClick={() => Changeimage(detail.src2)}
              >
                <img
                  className="card-img-top img-fluid p-2  w-100 h-100"
                  src={detail.src2}
                />
              </button>
              <button
                className="col-lg-1 card"
                onClick={() => Changeimage(detail.src3)}
              >
                <img
                  className="card-img-top img-fluid py-4"
                  src={detail.src3}
                />
              </button>
              <button
                className="col-lg-1 card"
                onClick={() => Changeimage(detail.src4)}
              >
                <img
                  className="card-img-top img-fluid py-4"
                  src={detail.src4}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2 className="ps-4 fw-bold">Related Product</h2>
        </div>
      {cat}
      </div>
      
    </>
  );
}

export default Detail;
