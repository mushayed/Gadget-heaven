import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {product_id, product_image, product_title, price } = product;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product_id}`)
  }

  return (
    <div onClick={handleViewDetails} className="bg-white rounded-2xl p-5 gap-y-6">
      <div className="w-[16rem] h-[10rem]">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={product_image}
          alt=""
        />
      </div>
      <h4 className="font-semibold text-xl">{product_title}</h4>
      <p className="py-3">Price: {price}$</p>
      <button className="btn btn-outline text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-slate-50 rounded-full">
        View Details
      </button>
    </div>
  );
};

export default Product;
