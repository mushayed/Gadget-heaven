// import React from "react";
// import { NavLink } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <nav className="border-2 flex items-center justify-between w-[96%] mx-auto mt-5 rounded-t-2xl md:px-5 lg:px-20 py-3">
//       <div className="font-bold text-xl">
//         <h4>Gadget Heaven</h4>
//       </div>
//       <div className="flex gap-6 text-base font-medium">
//         <NavLink>Home</NavLink>
//         <NavLink>Statistics</NavLink>
//         <NavLink>Dashboard</NavLink>
//       </div>
//       <div className="flex gap-4">
//         <div className="indicator">
//           <span className="indicator-item badge badge-secondary">0</span>
//           <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
//             <BsCart3 />
//           </div>
//         </div>
//         <div className="indicator">
//           <span className="indicator-item badge badge-secondary">0</span>
//           <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
//             <FaRegHeart />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; 
import { IoMdClose } from "react-icons/io"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-2 flex items-center justify-between w-[96%] mx-auto mt-5 rounded-t-2xl px-2 md:px-5 lg:px-20 py-3 relative">
      <div className="font-bold text-xl">
        <h4>Gadget Heaven</h4>
      </div>

      <div className="hidden md:flex gap-6 text-base font-medium">
        <NavLink>Home</NavLink>
        <NavLink>Statistics</NavLink>
        <NavLink>Dashboard</NavLink>
      </div>

      <div className="hidden md:flex gap-4">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">0</span>
          <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
            <BsCart3 />
          </div>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">0</span>
          <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
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
        <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-lg rounded-b-2xl p-5 flex flex-col items-center md:hidden">
          <NavLink className="py-2">Home</NavLink>
          <NavLink className="py-2">Statistics</NavLink>
          <NavLink className="py-2">Dashboard</NavLink>
          <div className="flex gap-4 mt-4">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">0</span>
              <div className="bg-base-300 grid h-10 w-10 rounded-full place-items-center">
                <BsCart3 />
              </div>
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">0</span>
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
