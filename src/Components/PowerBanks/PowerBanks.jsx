import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import Product from "../Product/Product";

const PowerBanks = () => {
  const {products} = useContext(ProductsContext);

  const powerBanksProducts = products.filter(
    (product) => product.category === "Power Banks"
  );

  if (!products.length || !powerBanksProducts.length) {
    return <div className="px-12 md:px-56 h-48 flex items-center justify-center"><h1 className="text-3xl font-bold text-center">No Data Found</h1></div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {powerBanksProducts.map((product) => {
        return <Product key={product.product_id} product={product}></Product>;
      })}
    </div>
  );
};

export default PowerBanks;
