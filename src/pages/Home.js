import React from "react";
import { ShopData } from "../data/data";
import { useDispatch } from "react-redux";
import { shopSliceActions } from "../store/ShopReducer";
import { toast } from "react-toastify";

import { Link, useParams } from "react-router-dom";
const Home = () => {
  const id = useParams;
  const dispatch = useDispatch();
  const addToCart = ({ id, name, price, imag }) => {
    dispatch(
      shopSliceActions.addCart({
        id: id,
        price: price,
        name: name,
        imag: imag,
      })
    );
    toast.success(`you add a ${name} product`, { position: "bottom-left" });
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-item-center">
      {ShopData.map((shop) => (
        <div
          className="container d-flex flex-column justify-content-center align-item-center"
          key={shop.id}
        >
          <div className="container d-flex justify-content-center align-item-center">
            {" "}
            <h1>{shop.name}</h1>
          </div>

          <img src={shop.image} className="img-fluid" />
          <div className="container d-flex justify-content-center align-item-center">
            {" "}
            <p>&{shop.price}</p>
          </div>

          <div className="container d-flex justify-content-center align-item-center">
            <button
              className="btn btn-primary text-white"
              onClick={() =>
                addToCart({
                  id: shop.id,
                  price: shop.price,
                  name: shop.name,
                  imag: shop.image,
                })
              }
            >
              Add cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
