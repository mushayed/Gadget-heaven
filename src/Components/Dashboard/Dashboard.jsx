import { useState } from "react"; 
import CartContainer from "../CartContainer/CartContainer";
import WishlistContainer from "../WishlistContainer/WishlistContainer";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("cart"); 

  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-8 bg-[#9538E2] text-white">
        <h3 className="font-bold text-3xl text-center">Dashboard</h3>
        <p className="text-base font-normal text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-6">
          <button
            className={`btn rounded-full px-14 ${activeButton === "cart" ? "text-[#9538E2]" : "bg-[#9538E2] text-white"}`}
            onClick={() => setActiveButton("cart")} 
          >
            Cart
          </button>
          <button
            className={`btn rounded-full px-14 ${activeButton === "wishlist" ? "text-[#9538E2]" : "bg-[#9538E2] text-white"}`}
            onClick={() => setActiveButton("wishlist")} 
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>
        {activeButton === "cart" ? <CartContainer></CartContainer> : <WishlistContainer></WishlistContainer>} 
      </div>
    </div>
  );
};

export default Dashboard;
