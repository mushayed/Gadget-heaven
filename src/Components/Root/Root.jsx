import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const Root = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("../../../public/products.json")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, cart, setCart, wishlist, setWishlist, totalPrice, setTotalPrice }}>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ProductsContext.Provider>
  );
};

export default Root;
