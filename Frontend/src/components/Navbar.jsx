import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white p-4">
      <Link to="" className="text-xl font-bold">Farm.IO</Link>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="text-white hover:text-gray-200 transition duration-300"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-gray-200 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
