import { SlEqualizer } from "react-icons/sl";
import Carts from "../Carts/Carts";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";

const CartContainer = () => {
  const {cart, totalPrice, setTotalPrice} = useContext(ProductsContext)

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center py-11">
        <div>
          <h4 className="text-2xl font-bold">Cart</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <h4 className="text-2xl font-bold">Total cost: {totalPrice}</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="text-lg font-semibold btn rounded-full px-10 text-[#9538E2] border-[#9538E2]">
              Sort by Price
              <SlEqualizer />
            </button>
            <button className="text-lg font-semibold btn rounded-full px-8 bg-[#9538E2] text-white">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div>
        {
          cart.length > 0 ? <Carts></Carts> : <div className="h-36 flex items-center justify-center"><h2 className="text-4xl font-bold text-[#9538E2]">Your cart is empty</h2></div>
        }
      </div>
    </div>
  );
};

export default CartContainer;
