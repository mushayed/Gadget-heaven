import { useContext } from "react";
import { SlEqualizer } from "react-icons/sl";
import { ProductsContext } from "../Root/Root";
import Wishlists from "../Wishlists/Wishlists";

const WishlistContainer = () => {
  const {wishlist} = useContext(ProductsContext);

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
          wishlist.length > 0 ? <Wishlists></Wishlists> : <div className="h-36 flex items-center justify-center"><h2 className="text-4xl font-bold text-[#9538E2]">Your wishlist is empty</h2></div>
        }
      </div>
    </div>
  );
};

export default WishlistContainer;
