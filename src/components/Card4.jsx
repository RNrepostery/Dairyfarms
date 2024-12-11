import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/CartSlice";

function Card4(props) {
  const dispatch = useDispatch();
  const name1 = useSelector((state) => state.cart.Cart);
  const [show, setShow] = useState(false);
  const addcards = () => {
    
    dispatch(
      add({
        name: props.card.titleName,
        images: props.card.imgsrc,
        price: props.card.orginalPriceName,
        discountprice: props.card.discountPriceName,
        productId: props.card.id,
        description: props.card.description,
        slug: props.card.slug,
        quantity: props.card.quantity,
        categories:props.card.categories
      })
    );
    setShow((s) => !s);
  };

  const { slug } = useParams();


  return (
    <>
      <div className="col-6 col-sm-6 col-md-6 col-lg-3">
        <div className="card bg-clr my-3 ">
          <Link to={props.card.slug}>
            {" "}
            <img
              className={props.card.imgclassName}
              src={props.card.imgsrc}
              alt="Card image cap"
            />
          </Link>
          <div className="card-block">
            <p className="card-text text-center px-3 line-height-card">
              {props.card.titleName}
            </p>
            <p className="card-text text-center px-3 line-height-card-rate">
              <small className="text-muted">
                <span className="text-decoration-line-through">
                  {props.card.orginalPriceName}
                </span>{" "}
                <span></span>
                {props.card.discountPriceName}
                <span>/500ml</span>
              </small>
            </p>
          </div>
          <div class="d-flex justify-content-between pe-2 ps-2 pb-2 pt-1">
          <Link to={props.card.slug}>
            <h4 class="card-title float-start text-success  d-lg-block d-none">
              In Stock
            </h4>
            </Link>

            <Link
              onClick={() =>
                addcards(
                  props.card.titleName,
                  props.card.imgsrc,
                  props.card.priceName,
                  props.card.discountPriceName,
                  props.card.id,
                  props.card.description,
                  props.card.quantity,
                  props.card.slug,
                  props.card.categories

                )
              }
            >
            <h4 class="card-title float-start text-success  d-lg-none d-block">
              Add
            </h4>
          
              {" "}
              <img
                alt="add to card"
                class="md:h-full md:w-full text-end plus-button plus-button d-lg-block d-none"
                src="https://pravarshaindustries.com/img/plus-icon.png"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card4;
