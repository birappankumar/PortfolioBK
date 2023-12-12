import React, { useState, useEffect } from "react";
import { logo, menu, close } from "../assets";

import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../data/info";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            alt="loading logo..."
            src={logo}
            className="w-9 h-9 object-contain"
          /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Birappan
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-[#0FFF95]" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition ease-out`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt="menu"
            src={!toggle ? menu : close}
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-poppins font-medium cursor-pointer transition ease-out`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
