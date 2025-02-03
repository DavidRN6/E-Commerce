import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // showSearch ? ==> it mean if it true return this function. if not return null

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <FiSearch />
      </div>
      <IoMdClose
        onClick={() => setShowSearch(false)}
        className="inline text-xl text-gray-500 cursor-pointer"
      />
    </div>
  ) : null;
}

export default SearchBar;
