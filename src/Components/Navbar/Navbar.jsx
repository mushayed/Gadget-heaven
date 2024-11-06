import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { ProductsContext } from "../Root/Root";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { cart, wishlist } = useContext(ProductsContext);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      id="navbar"
      className={`flex items-center justify-between w-[96%] mx-auto mt-5 rounded-t-2xl px-2 md:px-5 lg:px-20 py-3 relative ${isHomePage ? 'bg-[#9538E2] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-black'}`}
    >
      <div className="font-bold text-xl">
        <h4>Gadget Heaven</h4>
      </div>

      <div className="hidden md:flex gap-6 text-base font-medium">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-white border-b-2' : ''}>Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
      </div>

      <div className="hidden md:flex gap-4">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">
            {cart.length}
          </span>
          <div className="text-black bg-base-300 grid h-10 w-10 rounded-full place-items-center">
            <BsCart3 />
          </div>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">
            {wishlist.length}
          </span>
          <div className="text-black bg-base-300 grid h-10 w-10 rounded-full place-items-center">
            <FaRegHeart />
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-lg rounded-b-2xl p-5 flex flex-col items-center md:hidden z-10 text-black">
          <NavLink to="/" className="py-2">
            Home
          </NavLink>
          <NavLink to="/statistics" className="py-2">
            Statistics
          </NavLink>
          <NavLink to="/dashboard" className="py-2">
            Dashboard
          </NavLink>
          <NavLink to="/faqs" className="py-2">
            FAQs
          </NavLink>
          <div className="flex gap-4 mt-4">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {cart.length}
              </span>
              <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
                <BsCart3 />
              </div>
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {wishlist.length}
              </span>
              <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
