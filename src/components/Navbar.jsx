import React from "react";
import { LuBookA } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { ImHome2 } from "react-icons/im";
const Navbar = ({ setToggle, toggle }) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="w-[100%] fixed top-0 left-0 right-0 px-2.5 py-1 border-b flex items-center justify-between m-auto bg-white/20 backdrop-blur-lg md:px-8">
        <Link to="/" className="flex gap-1 items-center">
          <LuBookA size={40} className="text-[#4589F6]" />
          <p className="!text-[26px] tracking-widest font-bold  head">
            Dict<span className="text-[#4589F6]">AI</span>
          </p>
        </Link>
        <div className="flex md:gap-6 gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex  cursor-pointer gap-1 items-center opacity-60 hover:opacity-100 ${
                isActive ? "opacity-100" : ""
              }`
            }
          >
            <ImHome2 size={22} className="md:hidden" />
            <span className="md:inline md:text-lg hidden">Home</span>
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `opacity-60 cursor-pointer hover:opacity-100 gap-1  flex items-center ${
                isActive ? "opacity-100" : " "
              }`
            }
          >
            <MdHistory size={27} className="md:hidden" />
            <span className="md:inline md:text-lg hidden">History</span>
          </NavLink>
          <a
            href="https://github.com/Priyansh1607"
            target="_blank"
            className="md:inline md:text-[18px] md:opacity-60 md:hover:opacity-100 hidden"
          >
            Github
          </a>
          <button
            onClick={handleToggle}
            className="gap-2.5 cursor-pointer flex items-center"
          >
            {toggle ? (
              <BsMoonStarsFill color="#3C3A45" size={21} />
            ) : (
              <FaSun color="yellow" size={21} />
            )}
            <span className="md:inline md:opacity-60 md:hover:opacity-100 hidden">
              {toggle ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
