import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { useContext, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center py-5 font-medium text:logo">
      <Link to="/">
        <h1 id="logo" className="text-3xl text-[#482574]">
          Art Of Spirits
        </h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/*========
        Icons
      =========*/}

      <div className="flex items-center gap-6">
        {/*========
          Search
        =========*/}

        <span
          onClick={() => setShowSearch(true)}
          className="text-2xl cursor-pointer"
        >
          <FiSearch />
        </span>

        {/*========
          Profile
        ===========*/}

        <div className="group relative">
          <span className="text-2xl cursor-pointer">
            <CgProfile />
          </span>

          {/*=========
            dropdown
          =============*/}

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/*========
          Cart
        ===========*/}

        <Link to="/cart" className="relative">
          <span className="text-2xl cursor-pointer">
            <BsHandbag />
          </span>
          <p className="absolute right-[-5px] top-[13px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/*==============
          Sidebar menu 
        =================*/}

        <span
          onClick={() => setVisible(true)}
          className="text-[27px] cursor-pointer sm:hidden"
        >
          <BiMenuAltRight />
        </span>
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? `w-full` : `w-0`
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <span className="h-4 text-lg items-center">
              <MdKeyboardArrowLeft />
            </span>
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
