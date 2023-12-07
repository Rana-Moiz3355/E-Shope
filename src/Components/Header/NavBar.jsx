import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
function NavBar() {
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const handleLogOut = () => {
    if (!removeItem("token")) {
      navigate("/form");
    }
  };

  return (
    <>
      <nav className="relative bg-gray-100 p-4 flex justify-between items-center bg-white">
        <div>
          <Link to="/" className="text-2xl font-bold leading-none" href="#">
            <h1>Fake-Shope</h1>
          </Link>
        </div>
        <div className="flex   items-center">
          <div className="px-2">
            <Link to="/cart">
              {" "}
              <FaCartPlus className="w-12 h-10 py-2 hover:bg-gray-100 rounded-md" />
            </Link>
          </div>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="#"
          >
            Log In
          </a>
          <Link
            to="/form"
            onClick={handleLogOut}
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            Log Out
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
