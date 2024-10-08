import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useTheme from "./useTheme";

const Navbar = () => {
  const [theme, setTheme] = useTheme();
  const location = useLocation();

  const handleToggle = (e) => {
    console.log(e.target);
    console.log(e.target.checked);
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleNavItemClick = (path) => {
    setSelectedItem(path);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    // the main area where we want to implement the functionality
    const handlescroll = () => {
      if (window.scrollY > 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handlescroll);

    // the cleanup function
    // each time useEffect is destroyed and this function runs to cleanup
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const navItem = (
    <>
      <li className={location.pathname === "/" ? "text-fuchsia-500" : ""}>
        <a
          href="/"
          className="focus:bg-transparent hover:bg-transparent hover:text-fuchsia-500 hover:scale-105"
        >
          Home
        </a>
      </li>
      <li
        className={location.pathname === "/education" ? "text-fuchsia-500" : ""}
      >
        <a
          href="/education"
          className="focus:bg-transparent hover:bg-transparent hover:text-fuchsia-500 hover:scale-105"
        >
          Education
        </a>
      </li>
      <li
        className={
          location.pathname === "/experience" ? "text-fuchsia-500" : ""
        }
      >
        <a
          href="/experience"
          className="focus:bg-transparent hover:bg-transparent hover:text-fuchsia-500 hover:scale-105"
        >
          Experience
        </a>
      </li>
      <li
        className={location.pathname === "/projects" ? "text-fuchsia-500" : ""}
      >
        <a
          href="/projects"
          className="focus:bg-transparent hover:bg-transparent hover:text-fuchsia-500 hover:scale-105"
        >
          Projects
        </a>
      </li>
      <li
        className={location.pathname === "/contact" ? "text-fuchsia-500" : ""}
      >
        <a
          href="/contact"
          className="focus:bg-transparent hover:bg-transparent hover:text-fuchsia-500 hover:scale-105"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div>
      {theme === "light" ? (
        <div className="fixed top-0 z-[-2] h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] bg-cover"></div>
      ) : (
        <div className="fixed h-full w-full z-[-2] bg-slate-950">
          <div className="fixed bottom-0 left-0 right-0 top-0 z-[-2] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      )}
      <div
        className={`navbar h-[50px] pr-4 md:px-12 top-0 ${
          sticky
            ? theme === "light"
              ? "fixed z-10 bg-gradient-to-r from-pink-100 via-slate-50 to-fuchsia-200 border border-x-0 border-t-0 border-b-slate-200"
              : "fixed z-10 bg-gradient-to-r from-slate-800 via-slate-950 to-slate-800 border border-x-0 border-t-0 border-b-slate-700"
            : "bg-transparent"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="">
            {theme === "light" ? (
              <img className="max-h-20" src="./IA_logo.png" alt="" />
            ) : (
              <img className="max-h-20" src="./IA_dark_logo.png" alt="" />
            )}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-normal text-lg">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={handleToggle}
              checked={theme === "dark"}
            />
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
