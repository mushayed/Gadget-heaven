import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ProductsContext } from "../Root/Root";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { products } = useContext(ProductsContext);

  const chartData = products.map((product) => ({
    name: product.product_title,
    price: product.price,
    rating: product.rating,
  }));

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>

      <div className="flex flex-col items-center gap-4 p-8 bg-[#9538E2] text-white">
        <h3 className="font-bold text-3xl text-center">Statistics</h3>
        <p className="text-base font-normal text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            label={{
              value: "Product Name",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{
              value: "Price / Rating",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#9538E2"
          />

          <Bar dataKey="price" barSize={20} fill="#9538E2" />

          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
