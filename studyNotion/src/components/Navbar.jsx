import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="text-richblack-100 flex gap-x-6 mr-6 ml-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="flex items-center gap-x-4">
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>
              Logout
            </button>
          </Link>
          <Link to="dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-6">
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                navigate("/login");
                // toast.success("Logged In");
              }}>
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
