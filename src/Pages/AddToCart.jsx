import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, changeQuantity } from "../Redux/CartSlice";

function AddToCart() {
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
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">Your Cart</h2>
        {cart?.map((item, index) => (
          <div key={index} className="container px-3 px-md-5 mb-4">
            <div className="row align-items-center g-4 border-bottom py-3 rounded shadow-sm">
              {/* Product Image */}
              <div className="col-12 col-md-3 text-center">
                <img
                  src={item?.images}
                  alt={item?.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                />
              </div>

              {/* Product Details */}
              <div className="col-12 col-md-4 text-center text-md-start">
                <h5 className="mb-1">{item?.name}</h5>
                <p className="mb-1 text-muted">
                  <span className="text-decoration-line-through me-2">
                    {item?.price}
                  </span>
                  <span className="fw-bold">₹{item?.discountprice}</span>
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="col-12 col-md-3 text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleMinusQuantity(item?.quantity, item?.productId)}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    className="form-control mx-2 text-center"
                    value={item?.quantity}
                    readOnly
                    style={{ width: "60px" }}
                  />
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handlePlusQuantity(item?.quantity, item?.productId)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="col-12 col-md-2 text-center">
                <p className="fw-bold mb-0">
                  ₹{item?.discountprice * item?.quantity}
                </p>
              </div>

              {/* Remove Button */}
              <div className="col-12 col-md-1 text-center">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Total Price Section */}
        <div className="row mt-4">
          <div className="col-12 text-center text-md-end pe-5">
            <h4 className="fw-bold">
              Total: ₹
              {cart
                .map((item) => item.discountprice * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
