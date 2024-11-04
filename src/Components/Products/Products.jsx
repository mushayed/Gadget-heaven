import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import Product from "../Product/Product";

const Products = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
