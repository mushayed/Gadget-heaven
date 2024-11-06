import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ProductsContext } from "../Root/Root";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = ({ product }) => {
  const { product_id, product_image, product_title, description, price } =
    product;

  const { cart, setCart, totalPrice, setTotalPrice } =
    useContext(ProductsContext);

  const addToCart = () => {
    setCart([...cart, product_id]);
    setTotalPrice(totalPrice + price);

    toast.success(`${product_title} added into your cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-start p-8 border-2 rounded-2xl">
      <div className="w-[12rem] h-[7rem]">
        <img
          className="h-full w-full object-cover"
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-full gap-2">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{product_title}</h3>
          <button className="text-3xl text-red-600">
            <TiDeleteOutline />
          </button>
        </div>
        <p>{description}</p>
        <h3 className="text-xl font-semibold">Price: $ {price}</h3>
        <button
          onClick={addToCart}
          className="w-40 btn text-white bg-[#9538E2] rounded-full"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Wishlist;
