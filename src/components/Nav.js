import React from "react";

// React Icons

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
// Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* NavInner  */}
        <div className="w-full bg-black/20 h-[96px] rounded-full mx-auto text-white/50 max-w-[460px] backdrop-blur-2xl flex justify-between items-center text-2xl px-5 ">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contacts"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
