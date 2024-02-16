import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const cart = useSelector((state) => state.shop.cart);
  const count = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div className="navbar navbar-expand-xs navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-brand">
            Online Shop
          </Link>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/addcart">
              <FaCartPlus />
              <span>{count}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
