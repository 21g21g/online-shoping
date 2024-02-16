import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopSliceActions } from "../store/ShopReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.shop.count);
  const handleDecrease = ({ id }) => {
    dispatch(shopSliceActions.handleDecre(id));
  };
  const handleIncrease = (id) => {
    dispatch(shopSliceActions.handleIncrease(id));
  };
  const cart = useSelector((state) => state.shop.cart);
  console.log(cart);
  return (
    <div className="container d-flex flex-column justify-content-center align-item-center">
      {cart.map((cart) => (
        <div
          key={cart.id}
          className="container d-flex flex-column justify-content-center align-item-center"
        >
          <h1>{cart.name}</h1>
          <img src={cart.imag} className="img-fluid" />
          <div className=" d-flex justify-content-center align-item-center m-4">
            <button onClick={() => handleDecrease(cart.id)}>-</button>
          </div>
          <div className="d-flex justify-content-center align-item-center">
            <h1>{cart.count}</h1>
          </div>

          <div className=" d-flex justify-content-center align-item-center">
            <button onClick={() => handleIncrease(cart.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
