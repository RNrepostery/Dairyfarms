import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, changeQuantity } from "../Redux/CartSlice";

function AddToCart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleMinusQuantity = (quantity, id) => {
    dispatch(changeQuantity({ productId: id, quantity: quantity - 1 }));
  };

  const handlePlusQuantity = (quantity, id) => {
    dispatch(changeQuantity({ productId: id, quantity: quantity + 1 }));
  };

  const removeFromCart = (name) => {
    dispatch(remove(name));
  };

  return (
    <>
      <div className="mt-5 pt-5">
        <div className="mt-5 pt-5">
          {cart?.map((da, cartIndex) => (
            <div key={cartIndex} className="container px-5 mt-3 p-0">
              <div className="row position-relative">
                {/* Product Image */}
                <div className="col-12 col-sm-3">
                  <div className="card bg-clr">
                    <img
                      className="card-img-top img-fluid card-imgs"
                      src={da?.images}
                      alt={da?.name}
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="col-12 col-sm-4 mt-2">
                  <div className="card-block">
                    <p className="card-text text-center px-3 line-height-card">
                      {da?.name}
                    </p>
                    <p className="card-text text-center line-height-card-rate">
                      <div className="text-decoration-line-through">
                        {da?.price}
                      </div>
                      <small className="text-muted">{da?.discountprice}</small>
                    </p>
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="col-12 col-sm-3 mt-2">
                  <div className="card-block">
                    <p className="card-text text-center line-height-card-rate">
                      <button
                        className="minus"
                        aria-label="Decrease"
                        onClick={() => handleMinusQuantity(da?.quantity, da?.productId)}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        className="input-box text-center px-3"
                        value={da?.quantity}
                        min={1}
                        max={5}
                      />
                      <button
                        className="plus"
                        aria-label="Increase"
                        onClick={() => handlePlusQuantity(da?.quantity, da?.productId)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>

                {/* Total Price */}
                <div className="col-12 col-sm-2 mt-2">
                  <div className="card-block">
                    <p className="card-text text-center line-height-card-rate">
                      <small className="text-muted">
                        {da?.discountprice * da?.quantity}
                      </small>
                    </p>
                  </div>
                </div>

                
                <div className="position-absolute top-0 end-0  p-2 col-12 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => removeFromCart(da?.name)} 
                  ></button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>

      {/* Total Price Section */}
      <div className="row">
        <div className="col-12 text-center">
          <p className="fs-5 fw-dark">
            <span className="mx-1">Total:</span>
            {cart
              .map((item) => item.discountprice * item.quantity)
              .reduce((total, value) => total + value, 0)}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default AddToCart;
