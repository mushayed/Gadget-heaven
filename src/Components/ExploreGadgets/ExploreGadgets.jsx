
import { useContext } from "react";
import { ProductsContext } from "../Root/Root";
import { NavLink, Outlet } from "react-router-dom";
import Products from "../Products/Products";

const ExploreGadgets = () => {
    const products = useContext(ProductsContext);

    return (
        <div className="w-[90%] mx-auto mt-28 md:mt-32 lg:mt-80 flex flex-col gap-12 items-center py-16 bg-slate-50">
            <div className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</div>
            <div className="grid lg:grid-cols-6 items-start gap-6">
                <div className="border-2 rounded-2xl flex flex-col gap-6 p-6 md:w-[70%] lg:w-auto md:mx-auto bg-white">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-[#9538E2] text-white" : "btn btn-active rounded-full"
                        }
                    >
                        All Products
                    </NavLink>
                    <NavLink
                        to="/laptops"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-[#9538E2] text-white" : "btn btn-active rounded-full"
                        }
                    >
                        Laptops
                    </NavLink>
                    <NavLink
                        to="/phones"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-[#9538E2] text-white" : "btn btn-active rounded-full"
                        }
                    >
                        Phones
                    </NavLink>
                    <NavLink
                        to="/smart-watches"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-[#9538E2] text-white" : "btn btn-active rounded-full"
                        }
                    >
                        Smart Watches
                    </NavLink>
                    <NavLink
                        to="/chargers"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-[#9538E2] text-white" : "btn btn-active rounded-full"
                        }
                    >
                        Chargers
                    </NavLink>
                    <NavLink
                        to="/power-banks"
                        className={({ isActive }) =>
                            isActive ? "btn btn-active rounded-full bg-blue-500 text-white" : "btn btn-active rounded-full"
                        }
                    >
                        Power Banks
                    </NavLink>
                </div>
                <div className="lg:col-span-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ExploreGadgets;
