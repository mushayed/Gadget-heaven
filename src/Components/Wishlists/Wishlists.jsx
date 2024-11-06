import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import Wishlist from "../Wishlist/Wishlist";

const Wishlists = () => {
    const {products, wishlist} = useContext(ProductsContext)

    const wishlistProducts = wishlist.map(wishlistId => products.find(product => product.product_id === wishlistId));

    return (
        <div className="flex flex-col gap-6">
            {wishlistProducts.map((product, idx) => <Wishlist key={idx} product={product}></Wishlist>)}
        </div>
    );
};

export default Wishlists;