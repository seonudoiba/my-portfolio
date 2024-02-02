import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";

import { images } from "../constants";
import { logout } from "../store/actions/user";

const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  { name: "About us", type: "link", href: "About" },
  { name: "Contact us", type: "link", href: "Contact" },
  { name: "Services", type: "link", href: "Services" },
  { name: "Portfolio", type: "link", href: "Portfolio" },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-black">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/">
          <img
            src={images.Logo}
            alt="logo"
            className="brightness-0 logo-size invert mx-auto md:mx-0"
          />{" "}
        </Link>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6 bg-yellow-700"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6 bg-yellow-700" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0 " : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-black lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        
         {/* Account  */}
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-yellow-700 px-6 py-2 rounded-full text-yellow-700 font-semibold hover:bg-yellow-800 hover:text-white transition-all duration-300"
                    onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDrowpdown ? "block" : "hidden"
                    } lg:hidden bg-black transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <button
                          onClick={() => navigate("/admin")}
                          type="button"
                          className="hover:bg-black hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                        >
                          Admin Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="hover:bg-black hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-black hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="mt-5 lg:mt-0 border-2 border-yellow-700 px-6 py-2 rounded-full text-yellow-700 font-semibold hover:bg-yellow-700 hover:text-white transition-all duration-300"
            >
              Sign in
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
