import { useState } from "react";
import Coin from "../Assets/coin.png";
import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  // ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Achivers", link: "/achivers" },
    { name: "Awards", link: "/awards" },
    { name: "Club", link: "/club" },
    { name: "Our Blogs", link: "/ourblogs" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav class="bg-gradient-to-r from-purple-800 to-indigo-800">
          <div class="md:flex flex-wrap justify-between items-center mx-auto  p-2  ">
            <Link
              to="https://flowbite.com"
              class="flex items-center  space-x-3 rtl:space-x-reverse"
            >
              <img src={Coin} class="h-10" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                KaitWorld
              </span>
            </Link>

            {/* <div class="flex ">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden w-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 "
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button> */}
              {/* <div class="relative hidden md:block">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class=" block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div> */}
            {/* </div> */}
            <div class="flex justify-between items-center space-x-6 rtl:space-x-reverse">
              <Link
                to="tel:5541251234"
                class="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                (555) 412-1234
              </Link>
            </div>
            {/* <ul
              className="bg-black flex px-2 py-1 
                ml-0 w-48  
                "
            >
              <Link to="">
                {" "}
                <li className="btn flex text-white  font-semibold px-3 py-1 rounded duration-500 md:static">
                  Login
      
                  <ChevronDoubleRightIcon class="h-6 w-6  ml-3 text-white-500" />
                </li>
              </Link>
              <Link to="/">
                <li className="btn  text-white  font-semibold px-3 py-1 rounded duration-500 md:static">
                  Register
                </li>{" "}
              </Link>
            </ul> */}
          </div>
        </nav>

        <div className="shadow-md w-full fixed  left-0 sticky">
          <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
            {/* logo section */}
            {/* <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Inscribe</span>
            </div> */}
            {/* Menu icon */}
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </div>
            {/* linke items */}
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-12" : "top-[-666px]"
              }`}
            >
              {Links.map((link) => (
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-blue-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
