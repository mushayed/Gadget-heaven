import { SlEqualizer } from "react-icons/sl";

const CartContainer = () => {
  return (
    <div className="border-2 w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center py-11">
        <div>
          <h4 className="text-2xl font-bold">Cart</h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <h4 className="text-2xl font-bold">Total cost: 999.99</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <button class="text-lg font-semibold btn rounded-full px-10 text-[#9538E2] border-[#9538E2]">
              Sort by Price
              <SlEqualizer />
            </button>
            <button class="text-lg font-semibold btn rounded-full px-8 bg-[#9538E2] text-white">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CartContainer;
