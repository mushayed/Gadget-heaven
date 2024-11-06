import { useContext, useEffect } from "react";
import { SlEqualizer } from "react-icons/sl";
import { ProductsContext } from "../Root/Root";
import Wishlists from "../Wishlists/Wishlists";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistContainer = () => {
  const {wishlist, addedToCart, setAddedToCart} = useContext(ProductsContext);

  useEffect(() => {
    if (addedToCart) {
      toast.success(`Item added into your cart!`, {
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
      setAddedToCart(false);  
    }
  }, [addedToCart, setAddedToCart]);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center py-11">
        <div>
          <h4 className="text-2xl font-bold">Wishlist</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4"></div>
      </div>
      <div>
        {
          wishlist.length > 0 ? <Wishlists></Wishlists> : <div className="h-36 flex items-center justify-center"><h2 className="text-4xl font-bold text-[#9538E2] text-center">Your wishlist is empty</h2></div>
        }
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default WishlistContainer;
