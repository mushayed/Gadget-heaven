import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Root/Root";
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();

  const { products, cart, setCart, wishlist, setWishlist } =
    useContext(ProductsContext);

  const product = products.find((product) => product.product_id === productId);

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
    availability,
  } = product;

  const [wishlistDisabled, setWishlistDisabled] = useState(false);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (storedWishlist.includes(productId)) {
      setWishlistDisabled(true);
    }
  }, [productId]);

  const addToCart = () => {
    setCart([...cart, productId]);
  };

  const addToWishlist = () => {
    const updatedWishlist = [...wishlist, productId];
    setWishlist(updatedWishlist);
    setWishlistDisabled(true);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="pb-[38rem] md:pb-[25rem]">
      <div className="relative flex flex-col items-center gap-4 p-8 bg-[#9538E2] text-white">
        <h3 className="font-bold text-3xl text-center">Product Details</h3>
        <p className="text-base font-normal text-center pb-[14rem]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute top-64 left-[5%] lg:left-[15%] border-2 rounded-2xl w-[90%] lg:w-[70%] flex flex-col items-center md:items-stretch md:flex-row p-8 bg-white">
        <div className="w-[18rem] h-[15rem] md:w-[25rem] md:h-[30rem]">
          <img
            className="w-full h-full object-contain rounded-2xl"
            src={product_image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 justify-between px-3">
          <h3 className="text-2xl font-semibold">{product_title}</h3>
          <h4 className="text-xl font-semibold">Price: $ {price}</h4>
          <button class="w-[6rem] btn border border-[#309C08] text-[#309C08] rounded-full">
            {availability ? "In Stock" : "Out of Stock"}
          </button>
          <p>{description}</p>
          <p className="text-lg font-bold">Specification:</p>
          <ol className="px-4">
            {specification.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ol>
          <p className="text-lg font-bold">Rating</p>
          <div className="flex items-center gap-2">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
            />
            <button className="bg-slate-200 rounded-full px-3 mt-1">
              {rating}
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={addToCart}
              class="btn text-white bg-[#9538E2] rounded-full"
            >
              Add To Card
              <BsCart3 />
            </button>
            <button
              disabled={wishlistDisabled}
              onClick={addToWishlist}
              class="btn rounded-full text-[#9538E2]"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
