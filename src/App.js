import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./pages/NavBar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// import CartItemDisplay from "./pages/CartItemDisplay";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addcart" element={<Cart />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
