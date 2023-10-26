/* eslint-disable react/prop-types */
import { Logo, ImageAvatar } from "../assets/images";
import { IconMenu, IconCart2, IconClose } from "../assets/icons";
import { navLinks } from "../constants/data";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ menu, handleMenu, handleCart, countIcon }) => {
  const [borderNav, setBorderNav] = useState("");

  const handleLinks = (id, e) => {
    e.preventDefault();
    setBorderNav(id);
  };

  return (
    <nav className="w-full flex flex-row items-center justify-between mt-2 sm:max-w-[1440px] mx-auto sm:mt-0 sm:border-b sm:pb-3 px-6 md:px-[165px] pt-4 ">
      <HamburgerMenu
        menu={menu}
        handleMenu={handleMenu}
        IconClose={IconClose}
        navLinks={navLinks}
      />

      <div className="flex flex-row items-center space-x-[58px]">
        <div className="flex items-center space-x-8 sm:space-x-0">
          <img
            src={IconMenu}
            alt="Icon Menu"
            className=" w-4 h-[15px] sm:hidden"
            onClick={handleMenu}
          />
          <a href="">
            <img src={Logo} alt="Logo" className="w-24 pb-5" />
          </a>
        </div>

        <div className="hidden sm:block">
          <ul className="flex space-x-8 h-6">
            {navLinks.map((link) => {
              const { id, title } = link;
              return (
                <li
                  key={id}
                  className={`inline-block text-[15px] text-gray-500 hover:border-b-2 hover:text-orange border-orange
                  ${
                    borderNav === id
                      ? "border-b-2 border-orange text-orange"
                      : ""
                  }
                  `}
                  onClick={(e) => handleLinks(id, e)}
                >
                  <a href={id} className="">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="w-[21px] h-[13px] bg-orange rounded-[9px] text-[10px] font-bold text-center text-white absolute top-[-4px] sm:top-[4px] left-[10px]">
          {countIcon}
        </div>
        <div className="flex items-center space-x-[22px] sm:space-x-[45px]">
          <img
            src={IconCart2}
            alt="Icon Cart"
            className="w-[21px] h-[19px]"
            onClick={handleCart}
          />
          <img
            src={ImageAvatar}
            alt="Avatar"
            className="w-6 h-6 sm:w-10 sm:h-10 sm:border-2 sm:rounded-full sm:border-orange"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
