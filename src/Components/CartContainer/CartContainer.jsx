import { SlEqualizer } from "react-icons/sl";
import Carts from "../Carts/Carts";
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import group from "../../assets/Group.png";

const CartContainer = () => {
  const { products, cart, setCart, totalPrice, setTotalPrice, purchaseActive, setPurchaseActive } = useContext(ProductsContext);

  if(totalPrice > 0) {
    setPurchaseActive(false);
  }

  const sortByPrice = () => {
    const sortedCart = cart
      .map((cartId) => {
        const product = products.find((p) => p.product_id === cartId);
        return { cartId, price: product ? product.price : 0 };
      })
      .sort((a, b) => b.price - a.price)
      .map((item) => item.cartId);

    setCart(sortedCart);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center py-11">
        <div>
          <h4 className="text-2xl font-bold">Cart</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <h4 className="text-2xl font-bold">Total cost: {totalPrice}</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={sortByPrice}
              className="text-lg font-semibold btn rounded-full px-10 text-[#9538E2] border-[#9538E2]"
            >
              Sort by Price
              <SlEqualizer />
            </button>
            <button
              onClick={() => document.getElementById("my_modal").showModal()}
              className={"text-lg font-semibold btn rounded-full px-8 bg-[#9538E2] text-white"}
              disabled={purchaseActive}
            >
              Purchase
            </button>
          </div>

          <dialog id="my_modal" className="modal">
            <div className="modal-box">
              <div className="flex flex-col items-center">
                <div>
                  <img src={group} alt="" />
                </div>
                <h3 className="font-bold text-lg">Payment Successfully</h3>
                <p className="py-4">Thanks for purchasing</p>
                <p>Total: {totalPrice}</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn rounded-full px-24">Close</button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div>
        {cart.length > 0 ? (
          <Carts></Carts>
        ) : (
          <div className="h-36 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-[#9538E2]">
              Your cart is empty
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
